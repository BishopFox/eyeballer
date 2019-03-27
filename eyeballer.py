#!/usr/bin/python3

import matplotlib.pyplot as plt
import matplotlib.image as mpimg
from keras.preprocessing.image import ImageDataGenerator
from keras.preprocessing import image
from keras.models import Sequential, Model
from keras.optimizers import RMSprop, Adam
from keras.layers import Conv2D, MaxPooling2D, GlobalAveragePooling2D
from keras.layers import Activation, Dropout, Flatten, Dense
from keras.callbacks import TensorBoard, ModelCheckpoint
from keras import regularizers

from PIL import Image
from sklearn.metrics import precision_score, recall_score
from keras.applications.inception_v3 import InceptionV3
from keras.applications import MobileNet
from keras.applications.mobilenet import preprocess_input

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

import os
import argparse
import shutil
import time

# Parse the arguments
parser = argparse.ArgumentParser(description='Give those screenshots of yours a quick eyeballing')
parser.add_argument("mode", help="Mode of operation. One of \"train\", \"predict\", or \"evaluate\".")
parser.add_argument("--weights", help="Weights file for input/output")
parser.add_argument("--batchsize", help="Batch size", default=32, type=int)
parser.add_argument("--epochs", help="Number of epochs", default=20, type=int)
parser.add_argument("--screenshot", help="File to predict")
parser.add_argument("--summary", help="Print model summary at start")
parser.add_argument("--graphs", help="Save accuracy and loss graphs to file")

args = parser.parse_args()

class EyeballModel:
    checkpoint_file = "weights-snapshot.h5"
    image_dir = "images_224x224/"
    image_width, image_height = 224, 224
    input_shape = (image_width, image_height, 3)

    def __init__(self, print_summary=False, weights_file="weights.h5", summary=False, graphs=False):
        # Build the model
        base_model = MobileNet(weights='imagenet', include_top=False, input_shape=self.input_shape)
        x = base_model.output
        x = GlobalAveragePooling2D()(x)
        x = Dense(512, activation="relu", name="HiddenLayer1")(x)
        x = Dropout(0.5)(x)
        x = Dense(128, activation="relu", name="HiddenLayer2", kernel_regularizer=regularizers.l2(0.01))(x)
        x = Dropout(0.2)(x)
        output_layer = Dense(3, activation="sigmoid", name="OutputLayer")(x)
        self.model = Model(inputs=base_model.input, outputs=output_layer)

        adam = Adam(lr=0.0005)
        self.model.compile(optimizer=adam, loss="binary_crossentropy", metrics=["accuracy"])

        if summary:
            print(self.model.summary())

        # Pull out our labels for use in generators later
        data = pd.read_csv("labels.csv")
        self.training_labels = data.loc[data['evaluation'] == False]
        self.evaluation_labels = data.loc[data['evaluation'] == True]

        if weights_file is not None and os.path.isfile(weights_file):
            self.model.load_weights(weights_file)
            print("Loaded model from file.")
        else:
            print("No model loaded from file")

    # Training
    def train(self, weights_file, epochs=20, batch_size=32):
        # Data augmentation
        data_generator = ImageDataGenerator(
            preprocessing_function = preprocess_input,
            rescale=1./255,
            shear_range=0.0,
            zoom_range=0.2,
            samplewise_center=True,
            validation_split=0.2,
            horizontal_flip=False)

        training_generator = data_generator.flow_from_dataframe(
            self.training_labels,
            directory=self.image_dir,
            x_col="filename",
            y_col=["custom404", "login", "homepage"],
            target_size=(self.image_width, self.image_height),
            batch_size=batch_size,
            subset='training',
            shuffle=True,
            class_mode="other")
        validation_generator = data_generator.flow_from_dataframe(
            self.training_labels,
            directory=self.image_dir,
            x_col="filename",
            y_col=["custom404", "login", "homepage"],
            target_size=(self.image_width, self.image_height),
            batch_size=batch_size,
            subset='validation',
            shuffle=False,
            class_mode="other")

        # Model checkpoint - Saves model weights when validation accuracy improves
        callbacks = []
        callbacks.append(ModelCheckpoint(self.checkpoint_file, monitor='val_loss', verbose=1, save_best_only=True, save_weights_only=True, mode='min'))

        history = self.model.fit_generator(
            training_generator,
            steps_per_epoch=len(training_generator.filenames) // batch_size,
            epochs=epochs,
            validation_data=validation_generator,
            validation_steps=len(validation_generator.filenames) // batch_size,
            callbacks=callbacks,
            verbose=1)

        if graphs:
            # Plot training & validation accuracy values
            plt.plot(history.history['acc'])
            plt.plot(history.history['val_acc'])
            plt.title('Model accuracy')
            plt.ylabel('Accuracy')
            plt.xlabel('Epoch')
            plt.legend(['Train', 'Validation'], loc='upper left')
            plt.savefig("accuracy.png")
            plt.clf()
            plt.cla()
            plt.close()

            # Plot training & validation loss values
            plt.plot(history.history['loss'])
            plt.plot(history.history['val_loss'])
            plt.title('Model loss')
            plt.ylabel('Loss')
            plt.xlabel('Epoch')
            plt.legend(['Train', 'Validation'], loc='upper left')
            plt.savefig("loss.png")

    # Single predict on a file
    def predict(self, filename):
        # Load the weights from file
        self.model.load_weights(self.weights_file)

        # Load the image into memory
        img = image.load_img(filename, target_size=(self.image_width, self.image_height))
        img = image.img_to_array(img)
        img = np.expand_dims(img, axis=0)
        img = preprocess_input(img)

        time_start = time.time()
        prediction = self.model.predict(img, batch_size=1)
        time_end = time.time()
        print("Predictions:")
        print("\tCustom 404:" + str(round(prediction[0][0] * 100, 2)) + "%")
        print("\tLogin Page:" + str(round(prediction[0][1] * 100, 2)) + "%")
        print("\tHome Page:" + str(round(prediction[0][2] * 100, 2)) + "%")
        print("Prediction Took (seconds): ", time_end - time_start)

    # Evaluate performance against the persistent evaluation data set
    def evaluate(self, threshold=0.5):
        # Prepare the data
        data_generator = ImageDataGenerator(
            preprocessing_function = preprocess_input,
            rescale=1./255)
        evaluation_generator = data_generator.flow_from_dataframe(
            self.evaluation_labels,
            directory=self.image_dir,
            x_col="filename",
            y_col=["custom404", "login", "homepage"],
            target_size=(self.image_width, self.image_height),
            shuffle=False,
            batch_size=1,
            class_mode="other")
        predictions = self.model.predict_generator(evaluation_generator, verbose=1, steps=len(evaluation_generator))
        predictions = predictions > threshold

        all_or_nothing_success = 0
        correct_label_count = 0

        correct_per_category_counts = [0, 0, 0]

        labels = []

        # Loop through each prediction from the generator and built a list out of it
        for i, batch in enumerate(evaluation_generator):
            labels_row = batch[1][0]
            labels_row = labels_row > threshold
            labels.append(list(labels_row))
            # The generator keeps going past the end of the data set. So, manually kill it
            if i >= len(evaluation_generator)-1:
                break

        # Zip them together, so we can evaluate easier
        for row in zip(labels, predictions.tolist()):
            # All or nothing count
            if row[0] == row[1]:
                all_or_nothing_success += 1
            # Per-category count
            for i in range(len(row[0])):
                if row[0][i] == row[1][i]:
                    correct_per_category_counts[i] += 1

        custom404_labels = np.reshape(np.array(labels)[:, 0:1], len(labels)).tolist()
        custom404_predicitons = np.reshape(np.array(predictions)[:, 0:1], len(predictions)).tolist()

        login_labels = np.reshape(np.array(labels)[:, 1:2], len(labels)).tolist()
        login_predicitons = np.reshape(np.array(predictions)[:, 1:2], len(predictions)).tolist()

        homepage_labels = np.reshape(np.array(labels)[:, 2:3], len(labels)).tolist()
        homepage_predicitons = np.reshape(np.array(predictions)[:, 2:3], len(predictions)).tolist()

        custom404_precision = precision_score(custom404_labels, custom404_predicitons)
        custom404_recall = recall_score(custom404_labels, custom404_predicitons)
        print("Custom404 Precision Score: " + str(round(custom404_precision * 100, 2)) + "%")
        print("Custom404 Recall Score: " + str(round(custom404_recall * 100, 2)) + "%")

        login_precision = precision_score(login_labels, login_predicitons)
        login_recall = recall_score(login_labels, login_predicitons)
        print("Login Precision Score: " + str(round(login_precision * 100, 2)) + "%")
        print("Login Recall Score: " + str(round(login_recall * 100, 2)) + "%")

        homepage_precision = precision_score(homepage_labels, homepage_predicitons)
        homepage_recall = recall_score(homepage_labels, homepage_predicitons)
        print("Homepage Precision Score: " + str(round(homepage_precision * 100, 2)) + "%")
        print("Homepage Recall Score: " + str(round(homepage_recall * 100, 2)) + "%")

        print("All or nothing accuracy: " + str(round((all_or_nothing_success / len(evaluation_generator)) * 100 , 2)) + "%")


graphs = args.graphs is not None

model = EyeballModel(weights_file=args.weights, graphs=graphs)
if args.mode == "train":
    model.train(weights_file=args.weights, batch_size=args.batchsize, epochs=args.epochs)
elif args.mode == "predict":
    if args.screenshot is None:
        print("Error: Use the --screenshot flag to specify what file you want to predict on")
    else:
        model.predict(args.screenshot)
elif args.mode == "evaluate":
    model.evaluate(threshold=0.5)
else:
    print("Error: " + args.mode + " is not a valid mode. Try one of \"train\", \"predict\", or \"evaluate\"")

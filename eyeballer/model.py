import os
import random
import time

import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

from keras import regularizers
from keras.applications import MobileNet
from keras.applications.mobilenet import preprocess_input
from keras.callbacks import ModelCheckpoint
from keras.layers import Dropout, Dense
from keras.layers import GlobalAveragePooling2D
from keras.models import Model
from keras.optimizers import Adam
from keras.preprocessing import image
from keras.preprocessing.image import ImageDataGenerator
from sklearn.metrics import classification_report, accuracy_score, hamming_loss

DATA_LABELS = ["custom404", "login", "homepage", "oldlooking"]


class EyeballModel:
    """The primary model class of Eyeballer.

    Contains high-level functions for training, evaluating, and predicting.
    """
    checkpoint_file = "weights-snapshot.h5"
    image_dir = "images_224x224/"
    image_width, image_height = 224, 224
    input_shape = (image_width, image_height, 3)

    def __init__(self, print_summary=False, weights_file="weights.h5", seed=None):
        """Constructor for model class.

        Keyword arguments:
        print_summary -- Whether or not to print to stdout the keras model summary, containing a detailed description of every model layer
        weights_file -- A filename for where to load the model's weights.
        seed -- PRNG seed, useful for repeating a previous run and using the same data. Training/Validation split is determined randomly.
        """
        # Build the model
        base_model = MobileNet(weights='imagenet', include_top=False, input_shape=self.input_shape)
        x = base_model.output
        x = GlobalAveragePooling2D()(x)
        x = Dense(256, activation="relu", name="HiddenLayer1")(x)
        x = Dropout(0.5)(x)
        x = Dense(128, activation="relu", name="HiddenLayer2", kernel_regularizer=regularizers.l2(0.01))(x)
        x = Dropout(0.2)(x)
        output_layer = Dense(len(DATA_LABELS), activation="sigmoid", name="OutputLayer")(x)
        self.model = Model(inputs=base_model.input, outputs=output_layer)

        # for layer in base_model.layers:
        #    layer.trainable = False

        adam = Adam(lr=0.0005)
        self.model.compile(optimizer=adam, loss="binary_crossentropy", metrics=["accuracy"])

        if print_summary:
            print(self.model.summary())

        # Pull out our labels for use in generators later
        data = pd.read_csv("labels.csv")
        self.training_labels = data.loc[data['evaluation'] == False]  # noqa: E712
        self.evaluation_labels = data.loc[data['evaluation'] == True]  # noqa: E712

        # Shuffle the training labels
        self.random_seed = False
        self.seed = seed
        if self.seed is None:
            self.random_seed = True
            self.seed = random.randint(0, 999999)
            print("No seed set, ", end='')
        print(f"using seed: {self.seed}")
        random.seed(self.seed)
        self.training_labels = self.training_labels.sample(frac=1)

        if weights_file is not None and os.path.isfile(weights_file):
            self.model.load_weights(weights_file)
            print("Loaded model from file.")
        else:
            print("No model loaded from file")

    def train(self, epochs=20, batch_size=32, print_graphs=False):
        """Train the model, making a new weights file at each successfull checkpoint. You'll probably need a GPU for this to realistically run.

        Keyword arguments:
        epochs -- The number of epochs to train for. (An epoch is one pass-through of the dataset)
        batch_size -- How many images to batch together when training. Generally speaking, the higher the better, until you run out of memory.
        print_graphs --- Whether or not to create accuracy and loss graphs. If true, they'll be written to accuracy.png and loss.png
        """
        print("Training with seed: " + str(self.seed))

        # Data augmentation
        data_generator = ImageDataGenerator(
            preprocessing_function=preprocess_input,
            shear_range=0.0,
            zoom_range=0.2,
            brightness_range=(0.7, 1.3),
            samplewise_center=True,
            validation_split=0.2,
            horizontal_flip=False)

        training_generator = data_generator.flow_from_dataframe(
            self.training_labels,
            directory=self.image_dir,
            x_col="filename",
            y_col=DATA_LABELS,
            target_size=(self.image_width, self.image_height),
            batch_size=batch_size,
            subset='training',
            shuffle=True,
            seed=self.seed,
            class_mode="other")
        validation_generator = data_generator.flow_from_dataframe(
            self.training_labels,
            directory=self.image_dir,
            x_col="filename",
            y_col=DATA_LABELS,
            target_size=(self.image_width, self.image_height),
            batch_size=batch_size,
            subset='validation',
            shuffle=False,
            seed=self.seed,
            class_mode="other")

        # Model checkpoint - Saves model weights when validation accuracy improves
        callbacks = [ModelCheckpoint(self.checkpoint_file, monitor='val_loss', verbose=1, save_best_only=True,
                                     save_weights_only=True, mode='min')]

        history = self.model.fit_generator(
            training_generator,
            steps_per_epoch=len(training_generator.filenames) // batch_size,
            epochs=epochs,
            validation_data=validation_generator,
            validation_steps=len(validation_generator.filenames) // batch_size,
            callbacks=callbacks,
            verbose=1)

        if print_graphs:
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

    def predict(self, filename):
        """Predict the labels for a single file

        Keyword arguments:
        filename -- The path to the file that we'll be evaluating
        """
        # Load the image into memory
        img = image.load_img(filename, target_size=(self.image_width, self.image_height))
        img = image.img_to_array(img)
        img = np.expand_dims(img, axis=0)
        img = preprocess_input(img)

        time_start = time.time()
        prediction = self.model.predict(img, batch_size=1)
        time_end = time.time()
        print("Predictions:")
        print("\tCustom 404: " + str(round(prediction[0][0] * 100, 2)) + "%")
        print("\tLogin Page: " + str(round(prediction[0][1] * 100, 2)) + "%")
        print("\tHome Page: " + str(round(prediction[0][2] * 100, 2)) + "%")
        print("Prediction Took (seconds): ", time_end - time_start)

    def evaluate(self, threshold=0.5):
        """Evaluate performance against the persistent evaluation data set

        Keyword arguments:
        threshold -- Value between 0->1. The cutoff where the numerical prediction becomes boolean. Default: 0.5
        """
        # Prepare the data
        data_generator = ImageDataGenerator(
            preprocessing_function=preprocess_input)
        evaluation_generator = data_generator.flow_from_dataframe(
            self.evaluation_labels,
            directory=self.image_dir,
            x_col="filename",
            y_col=DATA_LABELS,
            target_size=(self.image_width, self.image_height),
            shuffle=False,
            batch_size=1,
            class_mode="other")
        # If a seed was selected, then also evaluate on the validation set for that seed
        if not self.random_seed:
            print("Using validation set...")
            # Data augmentation
            data_generator = ImageDataGenerator(
                preprocessing_function=preprocess_input,
                shear_range=0.0,
                zoom_range=0.2,
                brightness_range=(0.7, 1.3),
                samplewise_center=True,
                validation_split=0.2,
                horizontal_flip=False)
            evaluation_generator = data_generator.flow_from_dataframe(
                self.training_labels,
                directory=self.image_dir,
                x_col="filename",
                y_col=DATA_LABELS,
                target_size=(self.image_width, self.image_height),
                batch_size=1,
                subset='validation',
                shuffle=False,
                seed=self.seed,
                class_mode="other")
        else:
            print("Using evaluation set...")

        predictions = self.model.predict_generator(evaluation_generator, verbose=1, steps=len(evaluation_generator))
        predictions = predictions > threshold
        ground_truth = evaluation_generator.data
        stats = classification_report(ground_truth, predictions, target_names=DATA_LABELS, output_dict=True)
        stats["total_binary_accuracy"] = 1 - hamming_loss(ground_truth, predictions)
        stats["all_or_nothing_accuracy"] = accuracy_score(ground_truth, predictions)
        stats["top_10_best"] = self._top_images(evaluation_generator, predictions, best=True)
        stats["top_10_worst"] = self._top_images(evaluation_generator, predictions, best=False)
        return stats

    def _top_images(self, labels, predictions, top_k=10, best=False):
        """Collect top-k best or top-k worst predicted images

        Keyword arguments:
        labels -- The keras generator that contains the filenames and data labels
        predictions -- The numpy array of predictions
        top_k -- Top k elements
        best -- True/False. Calculate either the best or worst images

        :Return -- Tuple of top-k indicies and top-k filenames
        """
        true_labels = np.array(labels.data).astype(float)
        predictions = predictions.astype(float)

        differences = np.abs(predictions - true_labels).sum(axis=1)
        indicies = np.argsort(differences, axis=0)

        top_file_list = []

        if not best:
            # Reverse numpy array
            indicies = np.flipud(indicies)

        for i in indicies[:top_k]:
            top_file_list.append(labels.filenames[i])

        return indicies[:top_k], top_file_list

    def get_data_column(self, data_slice, data):
        return np.reshape(np.array(data)[data_slice], len(data)).tolist()

#!/usr/bin/python3

import matplotlib.pyplot as plt
import matplotlib.image as mpimg
from keras.preprocessing.image import ImageDataGenerator
from keras.preprocessing import image
from keras.models import Sequential, Model
from keras.optimizers import RMSprop, Adam
from keras.layers import Conv2D, MaxPooling2D, GlobalAveragePooling2D
from keras.layers import Activation, Dropout, Flatten, Dense
from keras.callbacks import TensorBoard
from keras import regularizers

from PIL import Image
from sklearn.metrics import classification_report, confusion_matrix
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

# Hyperparams
#IMAGE_WIDTH, IMAGE_HEIGHT = 360, 225
IMAGE_WIDTH, IMAGE_HEIGHT = 224, 224

IMAGE_DIR = "images_224x224/"

TEST_FILE = "test_file.txt"
WEIGHTS_FILE = "weights.h5"

# Parse the arguments
parser = argparse.ArgumentParser(description='Give those screenshots of yours a quick eyeballing')
parser.add_argument("--modelfile", help="Weights file for input/output")
parser.add_argument("--batchsize", help="Batch size", default=32, type=int)
parser.add_argument("--epochs", help="Number of epochs", default=20, type=int)
parser.add_argument("--predict", help="File to predict")
args = parser.parse_args()

if args.modelfile:
    WEIGHTS_FILE = args.modelfile
BATCH_SIZE = args.batchsize
EPOCHS = args.epochs

input_shape = (IMAGE_WIDTH, IMAGE_HEIGHT, 3)

#base_model = InceptionV3(weights='imagenet', include_top=False, input_shape=input_shape)
base_model = MobileNet(weights='imagenet', include_top=False, input_shape=input_shape)
x = base_model.output
# x = Conv2D(3, (2, 2), kernel_regularizer=regularizers.l2(0.01))(x)
# x = MaxPooling2D(pool_size=(2, 2), name="LastPooling")(x)
# x = Dropout(0.2)(x)

x = GlobalAveragePooling2D()(x)
x = Dense(512, activation="relu", name="HiddenLayer1")(x)
x = Dropout(0.5)(x)
x = Dense(128, activation="relu", name="HiddenLayer2", kernel_regularizer=regularizers.l2(0.01))(x)
x = Dropout(0.2)(x)
# x = Dense(4, activation="relu", name="HiddenLayer3", kernel_regularizer=regularizers.l2(0.01))(x)
# x = Dropout(0.2)(x)
# x = Dense(8,x = Dense(4, activation="relu", name="HiddenLayer1", kernel_regularizer=regularizers.l2(0.01))(x)
# x = Dense(16, activation="relu", name="HiddenLayer3", kernel_regularizer=regularizers.l2(0.01))(x)
# x = Dropout(0.5)(x)
output_layer = Dense(3, activation="sigmoid", name="OutputLayer")(x)

model = Model(inputs=base_model.input, outputs=output_layer)

# Single predict mode
if args.predict:
    # Load the model from file
    model.load_weights(WEIGHTS_FILE)

    # Load the image into memory
    img = image.load_img(args.predict, target_size=(IMAGE_WIDTH, IMAGE_HEIGHT))
    img = image.img_to_array(img)

    batch = img[np.newaxis, ...]
    time_start = time.time()
    prediction = model.predict(batch, batch_size=1)
    time_end = time.time()
    elapsed = time_end - time_start
    print("Predictions:")
    print("\tCustom 404:", round(prediction[0][0] * 100, 2))
    print("\tLogin Page:", round(prediction[0][1] * 100, 2))
    print("\tHome Page:", round(prediction[0][2] * 100, 2))
    print("Prediction Took (seconds): ", elapsed)
    exit()

# for layer in base_model.layers:
#    layer.trainable = False

adam = Adam(lr=0.0005)
model.compile(optimizer=adam,
    loss="binary_crossentropy",
    metrics=["accuracy"])

print(model.summary())

if args.modelfile:
    if os.path.isfile(WEIGHTS_FILE):
        model.load_weights(WEIGHTS_FILE)
        print("Loaded model from file.")
    else:
        print("No model to load from file")

# Data augmentation
data_generator = ImageDataGenerator(
    preprocessing_function = preprocess_input,
    rescale=1./255,
    shear_range=0.0,
    zoom_range=0.2,
    samplewise_center=True,
    validation_split=0.2,
    horizontal_flip=False)

# data_generator = ImageDataGenerator(preprocessing_function = preprocess_input,
#     validation_split=0.2)

# Data preparation

data = pd.read_csv("labels.csv")

training_generator = data_generator.flow_from_dataframe(
    data,
    directory=IMAGE_DIR,
    x_col="filename",
    y_col=["custom404", "login", "homepage"],
    target_size=(IMAGE_WIDTH, IMAGE_HEIGHT),
    batch_size=BATCH_SIZE,
    subset='training',
    shuffle=True,
    class_mode="other")
validation_generator = data_generator.flow_from_dataframe(
    data,
    directory=IMAGE_DIR,
    x_col="filename",
    y_col=["custom404", "login", "homepage"],
    target_size=(IMAGE_WIDTH, IMAGE_HEIGHT),
    batch_size=BATCH_SIZE,
    subset='validation',
    shuffle=False,
    class_mode="other")

# Training
history = model.fit_generator(
    training_generator,
    steps_per_epoch=len(training_generator.filenames) // BATCH_SIZE,
    epochs=EPOCHS,
    validation_data=validation_generator,
    validation_steps=len(validation_generator.filenames) // BATCH_SIZE,
    verbose=1)

if args.modelfile:
    print("Saving model...")
    model.save_weights(WEIGHTS_FILE)
    print("Model saved")

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


# def confusion_matrix_evaluate(validation_generator, model):
#     #Confution Matrix and Classification Report
#     y_pred = model.predict_generator(validation_generator, verbose=1)
#     y_pred = y_pred > 0.5
#     print('Confusion Matrix')
#     print(confusion_matrix(validation_generator.classes, y_pred))
#
#     j = 0
#     for batch in validation_generator:
#         labels = batch[1]
#         labels = labels > 0.5
#         for i in range(len(labels)):
#             index = i + (j * BATCH_SIZE)
#             # Correct?
#             if labels[i] == y_pred[index]:
#                 shutil.copyfile(IMAGE_DIR + validation_generator.filenames[index], "confusion/correct/" + validation_generator.filenames[index])
#             # Wrong
#             else:
#                 shutil.copyfile(IMAGE_DIR + validation_generator.filenames[index], "confusion/wrong/" + validation_generator.filenames[index])
#         j+=1
#
# # Print out a confusion matrix in image form!
# confusion_matrix_evaluate(validation_generator, model)

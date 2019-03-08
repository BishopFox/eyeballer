#!/usr/bin/python3

import matplotlib.pyplot as plt
import matplotlib.image as mpimg
from keras.preprocessing.image import ImageDataGenerator
from keras.models import Sequential
from keras.optimizers import RMSprop, Adam
from keras.layers import Conv2D, MaxPooling2D
from keras.layers import Activation, Dropout, Flatten, Dense
from keras.callbacks import CSVLogger

import os
import argparse

# Hyperparams
IMAGE_WIDTH, IMAGE_HEIGHT = 360, 225

TEST_FILE = "test_file.txt"
WEIGHTS_FILE = "weights.h5"

# Parse the arguments
parser = argparse.ArgumentParser(description='Give those screenshots of yours a quick eyeballing')
parser.add_argument("--modelfile", help="Weights file for input/output")
parser.add_argument("--batchsize", help="Batch size", default=32, type=int)
parser.add_argument("--epochs", help="Number of epochs", default=20, type=int)
args = parser.parse_args()

if args.modelfile:
    WEIGHTS_FILE = args.modelfile
BATCH_SIZE = args.batchsize
EPOCHS = args.epochs

input_shape = (IMAGE_WIDTH, IMAGE_HEIGHT, 3)

model = Sequential()
model.add(Conv2D(32, (3, 3), input_shape=input_shape, activation="relu"))
model.add(MaxPooling2D(pool_size=(2, 2)))

model.add(Conv2D(32, (3, 3), activation="relu"))
model.add(MaxPooling2D(pool_size=(2, 2)))

model.add(Conv2D(64, (3, 3), activation="relu"))
model.add(MaxPooling2D(pool_size=(2, 2)))

model.add(Flatten())
model.add(Dense(64, activation="relu"))
model.add(Dropout(0.5))
model.add(Dense(1, activation="sigmoid"))

adam = Adam(lr=.01)
model.compile(loss='binary_crossentropy',
              optimizer="rmsprop",
              metrics=['accuracy'])

if os.path.isfile(WEIGHTS_FILE):
    model.load_weights(WEIGHTS_FILE)
    print("Loaded model from file.")
else:
    print("No model to load from file")

print(model.summary())

# Data augmentation
data_generator = ImageDataGenerator(
    rescale=1./255,
    shear_range=0.1,
    zoom_range=0.1,
    validation_split=0.2,
    horizontal_flip=False)

# Data preparation
training_generator = data_generator.flow_from_directory(
    "images/",
    target_size=(IMAGE_WIDTH, IMAGE_HEIGHT),
    batch_size=BATCH_SIZE,
    subset='training',
    class_mode="binary")
validation_generator = data_generator.flow_from_directory(
    "images/",
    target_size=(IMAGE_WIDTH, IMAGE_HEIGHT),
    batch_size=BATCH_SIZE,
    subset='validation',
    class_mode="binary")

# Training
model.fit_generator(
    training_generator,
    steps_per_epoch=len(training_generator.filenames) // BATCH_SIZE,
    epochs=EPOCHS,
    validation_data=validation_generator,
    validation_steps=len(validation_generator.filenames) // BATCH_SIZE,
    verbose=1)

print("Saving model...")
model.save_weights(WEIGHTS_FILE)
print("Model saved")

# Testing
# probabilities = model.predict_generator(validation_generator, TEST_SIZE)
# for index, probability in enumerate(probabilities):
#     image_path = "images/" + validation_generator.filenames[index]
#     img = mpimg.imread(image_path)
#     with open(TEST_FILE,"a") as fh:
#         fh.write(str(probability[0]) + " for: " + image_path + "\n")
#     plt.imshow(img)
#     if probability > 0.5:
#         plt.title("%.2f" % (probability[0]*100) + "% dog")
#     else:
#         plt.title("%.2f" % ((1-probability[0])*100) + "% cat")
#     plt.show()

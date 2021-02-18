import os
import random
import sys
import progressbar

# Prevent Tkinter Dependency
import matplotlib
matplotlib.use('agg')  # noqa: E402
import matplotlib.pyplot as plt

import numpy as np
import pandas as pd
import Augmentor
import tensorflow as tf

from tensorflow.keras.applications.mobilenet import preprocess_input
from sklearn.metrics import classification_report, accuracy_score, hamming_loss
from eyeballer.augmentation import EyeballerAugmentation

DATA_LABELS = ["custom404", "login", "webapp", "oldlooking"]


class EyeballModel:
    """The primary model class of Eyeballer.

    Contains high-level functions for training, evaluating, and predicting.
    """
    graphs_directory = "graphs/"
    checkpoint_file = "weights.h5"
    image_dir = "images/"
    image_width, image_height = 224, 224
    input_shape = (image_width, image_height, 3)

    def __init__(self, weights_file, print_summary=False, seed=None, quiet=False):
        """Constructor for model class.

        Keyword arguments:
        print_summary -- Whether or not to print to stdout the keras model summary, containing a detailed description of every model layer
        weights_file -- A filename for where to load the model's weights.
        seed -- PRNG seed, useful for repeating a previous run and using the same data. Training/Validation split is determined randomly.
        """
        # # Build the model
        self.model = tf.keras.Sequential()
        pretrained_layer = tf.keras.applications.mobilenet.MobileNet(weights='imagenet', include_top=False, input_shape=self.input_shape)
        self.model.add(pretrained_layer)
        self.model.add(tf.keras.layers.GlobalAveragePooling2D())
        self.model.add(tf.keras.layers.Dense(256, activation="relu"))
        self.model.add(tf.keras.layers.Dropout(0.5))
        self.model.add(tf.keras.layers.Dense(128, activation="relu"))
        self.model.add(tf.keras.layers.Dropout(0.2))
        self.model.add(tf.keras.layers.Dense(len(DATA_LABELS), activation="sigmoid"))

        self.model.compile(optimizer=tf.keras.optimizers.Adam(0.0005),
                           loss="binary_crossentropy",
                           metrics=["accuracy"])

        if weights_file is not None and os.path.isfile(weights_file):
            try:
                self.model.load_weights(weights_file)
            except OSError:
                print("ERROR: Unable to open weights file '{}'".foramt(weights_file))
                sys.exit(-1)
            print("Loaded model from file.")
        else:
            if weights_file is not None:
                raise FileNotFoundError
            print("WARN: No model loaded from file. Generating random model")

        if print_summary:
            print(self.model.summary())

        self.quiet = quiet
        self.seed = seed

    def _init_labels(self):
        # Pull out our labels for use in generators later
        data = pd.read_csv("labels.csv")
        self.training_labels = data.loc[data['evaluation'] == False]  # noqa: E712
        self.evaluation_labels = data.loc[data['evaluation'] == True]  # noqa: E712

        # Shuffle the training labels
        self.random_seed = False
        if self.seed is None:
            self.random_seed = True
            self.seed = random.randint(0, 999999)
            print("No seed set, ", end='')
        print("using seed: {}".format(self.seed))
        random.seed(self.seed)
        self.training_labels = self.training_labels.sample(frac=1)

        # Data augmentation
        augmentor = Augmentor.Pipeline()
        augmentor.set_seed(self.seed)
        augmentor.zoom(probability=0.75, min_factor=0.8, max_factor=1.2)
        augmentor.random_color(probability=0.75, min_factor=0.5, max_factor=1.0)
        augmentor.random_contrast(probability=0.75, min_factor=0.8, max_factor=1.0)
        augmentor.random_brightness(probability=0.75, min_factor=0.8, max_factor=1.2)
        augmentor.random_erasing(probability=0.75, rectangle_area=0.15)

        # Finalizes the augmentation with a custom operation to prepare the image for the specific pretrained model we're using
        training_augmentation = EyeballerAugmentation()
        augmentor.add_operation(training_augmentation)
        self.preprocess_training_function = augmentor.keras_preprocess_func()

    def train(self, epochs=20, batch_size=32, print_graphs=False):
        """Train the model, making a new weights file at each successfull checkpoint. You'll probably need a GPU for this to realistically run.

        Keyword arguments:
        epochs -- The number of epochs to train for. (An epoch is one pass-through of the dataset)
        batch_size -- How many images to batch together when training. Generally speaking, the higher the better, until you run out of memory.
        print_graphs --- Whether or not to create accuracy and loss graphs. If true, they'll be written to accuracy.png and loss.png
        """
        print("Training with seed: " + str(self.seed))

        self._init_labels()
        data_generator = tf.keras.preprocessing.image.ImageDataGenerator(
            preprocessing_function=self.preprocess_training_function,
            validation_split=0.2,
            samplewise_center=True)

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
            class_mode="raw")
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
            class_mode="raw")

        # Model checkpoint - Saves model weights when validation accuracy improves
        callbacks = [tf.keras.callbacks.ModelCheckpoint(self.checkpoint_file,
                                                        monitor='val_loss',
                                                        verbose=1,
                                                        save_best_only=True,
                                                        save_weights_only=True,
                                                        mode='min'),
                     tf.keras.callbacks.TensorBoard(log_dir='logs',
                                                    histogram_freq=2,
                                                    write_graph=True,
                                                    write_images=False,
                                                    update_freq='epoch',
                                                    profile_batch=2,
                                                    embeddings_freq=0,
                                                    embeddings_metadata=None),
                     ]

        history = self.model.fit(
            training_generator,
            steps_per_epoch=len(training_generator.filenames) // batch_size,
            epochs=epochs,
            validation_data=validation_generator,
            validation_steps=len(validation_generator.filenames) // batch_size,
            callbacks=callbacks,
            verbose=1)

        if print_graphs:
            if not os.path.exists(self.graphs_directory):
                os.makedirs(self.graphs_directory)
            # Plot training & validation accuracy values
            plt.plot(history.history['acc'])
            plt.plot(history.history['val_acc'])
            plt.title('Model accuracy')
            plt.ylabel('Accuracy')
            plt.xlabel('Epoch')
            plt.legend(['Train', 'Validation'], loc='upper left')
            plt.savefig(self.graphs_directory + "accuracy.png")
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
            plt.savefig(self.graphs_directory + "loss.png")

    def predict_on_array(self, image):
        """Predict the labels for a single screenshot

        Keyword arguments:
        image -- The numpy array of the image to classify
        """
        img = np.expand_dims(image, axis=0)
        img = preprocess_input(img)

        prediction = self.model.predict(img, batch_size=1)
        result = dict()
        result["filename"] = "custom-image"
        result["custom404"] = prediction[0][0]
        result["login"] = prediction[0][1]
        result["webapp"] = prediction[0][2]
        result["oldlooking"] = prediction[0][3]
        return result

    def predict(self, path, threshold=0.5):
        """Predict the labels for a single file or directory of files

        Keyword arguments:
        path -- The path to the file(s) that we'll be evaluating.
        """
        # Is this a single file, or a directory?
        screenshots = []
        if os.path.isfile(path):
            screenshots = [path]
        elif os.path.isdir(path):
            screenshots = os.listdir(path)
            screenshots = [os.path.join(path, s) for s in screenshots]
        else:
            raise FileNotFoundError

        results = []
        bar = progressbar.ProgressBar()
        if self.quiet:
            bar = progressbar.NullBar()
        for screenshot in bar(screenshots):
            # Load the image into memory
            img = None
            try:
                img = tf.keras.preprocessing.image.load_img(screenshot, target_size=(self.image_width, self.image_height))
                img = tf.keras.preprocessing.image.img_to_array(img)
                img = np.expand_dims(img, axis=0)
                img = preprocess_input(img)
            except IsADirectoryError:
                print("\nWARN: Skipping directory: ", screenshot)
                continue
            except OSError:
                print("\nWARN: Skipping empty or corrupt file: ", screenshot)
                continue

            prediction = self.model.predict(img, batch_size=1)
            result = dict()
            result["filename"] = screenshot
            result["custom404"] = prediction[0][0]
            result["login"] = prediction[0][1]
            result["webapp"] = prediction[0][2]
            result["oldlooking"] = prediction[0][3]
            results.append(result)
        return results

    def evaluate(self, threshold=0.5):
        """Evaluate performance against the persistent evaluation data set

        Keyword arguments:
        threshold -- Value between 0->1. The cutoff where the numerical prediction becomes boolean. Default: 0.5
        """
        # Prepare the data
        self._init_labels()
        data_generator = tf.keras.preprocessing.image.ImageDataGenerator(
            preprocessing_function=preprocess_input)
        evaluation_generator = data_generator.flow_from_dataframe(
            self.evaluation_labels,
            directory=self.image_dir,
            x_col="filename",
            y_col=DATA_LABELS,
            target_size=(self.image_width, self.image_height),
            shuffle=False,
            batch_size=1,
            class_mode="raw")
        # If a seed was selected, then also evaluate on the validation set for that seed
        if not self.random_seed:
            print("Using validation set...")
            # Data augmentation
            data_generator = tf.keras.preprocessing.image.ImageDataGenerator(
                preprocessing_function=self.preprocess_training_function,
                samplewise_center=True,
                validation_split=0.2)
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
                class_mode="raw")
        else:
            print("Using evaluation set...")

        predictions = self.model.predict(
            evaluation_generator,
            verbose=1,
            steps=len(evaluation_generator))

        self._save_prediction_histograms(predictions)
        predictions = predictions > threshold
        ground_truth = self.evaluation_labels[DATA_LABELS].to_numpy()
        filenames = self.evaluation_labels[["filename"]].to_numpy()
        stats = classification_report(ground_truth, predictions, target_names=DATA_LABELS, output_dict=True)
        stats["total_binary_accuracy"] = 1 - hamming_loss(ground_truth, predictions)
        stats["all_or_nothing_accuracy"] = accuracy_score(ground_truth, predictions)
        stats["top_10_best"] = self._top_images(filenames, ground_truth, predictions, best=True)
        stats["top_10_worst"] = self._top_images(filenames, ground_truth, predictions, best=False)
        stats["none_of_the_above_recall"] = self._none_of_the_above_recall(ground_truth, predictions)
        stats["none_of_the_above_precision"] = self._none_of_the_above_precision(ground_truth, predictions)
        return stats

    def _none_of_the_above_recall(self, labels, predictions):
        """Returns the recall score for the 'none of the above' images.
        That means, all the images that don't have a category.
        """
        total_count = 0
        correct_count = 0
        for item in zip(labels.astype(int), predictions.astype(int)):
            # Is this a none of the above?
            if not item[0].any():
                total_count += 1
                if not item[1].any():
                    correct_count += 1
        if total_count == 0:
            print("WARNING: None of the Above Recall is NaN")
            return 0
        return correct_count / total_count

    def _none_of_the_above_precision(self, labels, predictions):
        """Returns the precision score for the 'none of the above' images.
        That means, all the images that don't have a category.
        """
        total_count = 0
        correct_count = 0
        for item in zip(labels.astype(int), predictions.astype(int)):
            # Is this a none of the above prediction?
            if not item[1].any():
                total_count += 1
                if not item[0].any():
                    correct_count += 1
        if total_count == 0:
            print("WARNING: None of the Above Precision is NaN")
            return 0
        return correct_count / total_count

    def _top_images(self, filenames, ground_truth, predictions, top_k=10, best=False):
        """Collect top-k best or top-k worst predicted images

        Keyword arguments:
        ground_truth -- The correct labels
        predictions -- The numpy array of predictions
        top_k -- Top k elements
        best -- True/False. Calculate either the best or worst images

        :Return -- Tuple of top-k indicies and top-k filenames
        """
        true_labels = np.array(ground_truth).astype(float)
        predictions = predictions.astype(float)

        differences = np.abs(predictions - true_labels).sum(axis=1)
        indicies = np.argsort(differences, axis=0)

        top_file_list = []

        if not best:
            # Reverse numpy array
            indicies = np.flipud(indicies)

        for i in indicies[:top_k]:
            top_file_list.append(filenames[i][0])

        return indicies[:top_k], top_file_list

    def _save_prediction_histograms(self, predictions, buckets=50):
        """Saves a series of histogram screenshots

            Keyword arguments:
            predictions -- The numpy array of predicted labels, ranging from 0->1.
            buckets -- The number of buckets to divide the data into. Default: 50
            :Returns -- Nothing"
        """
        figure, axes = plt.subplots(nrows=len(DATA_LABELS))
        for i, label in enumerate(DATA_LABELS):
            axes[i].hist(predictions[:, i], buckets, alpha=.75)
            axes[i].set_xlabel("Prediction")
            axes[i].set_ylabel("Counts of Predictions")
            axes[i].set_title(label)
            axes[i].grid(True)
        figure.set_size_inches(5, 3*len(DATA_LABELS))
        figure.tight_layout()
        if not os.path.exists(self.graphs_directory):
            os.makedirs(self.graphs_directory)
        plt.savefig(self.graphs_directory + "label_histograms.png")

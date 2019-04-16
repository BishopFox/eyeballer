import numpy as np

from Augmentor.Operations import Operation
from keras.applications.mobilenet import preprocess_input


class EyeballerAugmentation(Operation):
    def __init__(self, probability=1):
        Operation.__init__(self, probability)

    # Class must implement the perform_operation method
    def perform_operation(self, images):
        return_list = []
        for image in images:
            image_array = np.array(image).astype('uint8')
            image_array = preprocess_input(image_array)
            return_list.append(image_array)
        return return_list

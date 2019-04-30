import numpy as np
import math
from keras.preprocessing import image
from copy import deepcopy
from keras.applications.mobilenet import preprocess_input


class HeatMap():
    def __init__(self, screenshot_path, model, boxsize=28, step=7):
        self.model = model

        img = image.load_img(screenshot_path, target_size=(self.model.image_width, self.model.image_height))
        img = image.img_to_array(img)

        self.screenshot = img
        self.boxsize = boxsize
        self.step = step
        self.x = 0
        self.y = 0
        self.screenshot_path = screenshot_path

    def generate(self):
        # TODO: For each label
        heatmap = np.zeros((self.model.image_width, self.model.image_height))
        while True:
            # Occlude an image
            occluded_image, x, y = self._occlude()
            if occluded_image is not None:
                # Score the new occluded image
                results = self.model.predict_on_array(occluded_image)
                score = results["custom404"]  # TODO
                print("Interim Score: ", x, y, score)
                # Scale the score up to pixel values
                score = math.floor(score * 255)
                # Paint the score across the whole box in the heatmap
                heatmap[x: x+self.boxsize, y: y+self.boxsize] = score

            else:
                break
        return heatmap

    def _occlude(self):
        ''' Return a single occluded image and its location '''
        if self.x + self.boxsize > self.screenshot.shape[0]:
            return None, None, None

        retImg = np.copy(self.screenshot)
        retImg[self.x:self.x+self.boxsize, self.y:self.y+self.boxsize] = 0.0

        old_i = deepcopy(self.x)
        old_j = deepcopy(self.y)

        # update indices
        self.y = self.y + self.step
        if self.y+self.boxsize > self.screenshot.shape[1]:  # reached end
            self.y = 0  # reset j
            self.x = self.x + self.step  # go to next row

        return retImg, old_i, old_j

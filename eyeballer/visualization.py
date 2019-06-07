import numpy as np
import math
from keras.preprocessing import image
from copy import deepcopy
from matplotlib import pyplot as plt
from eyeballer.model import DATA_LABELS


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
        self.gamma = 3

    def generate(self, output_file="heatmap.png"):
        """ Make a single heatmap image and return it """
        heatmaps = []
        labels = []
        results = self.model.predict(self.screenshot_path)
        results = results[0]
        for label in DATA_LABELS:
            boxsize = self.boxsize
            # Ignore this label if it didn't predict positively (true label)
            if results[label] > 0.5:
                worst_score = 1
                while worst_score > 0.5:
                    heatmap, worst_score = self._get_heatmap(label, boxsize)
                    if worst_score > 0.5:
                        boxsize += 28
                        print("Didn't get a good image for {}. Trying again with a bigger boxsize: {}".format(label, boxsize))
                    else:
                        heatmaps.append(heatmap)
                        labels.append(label)

        plt.figure()
        screenshot_image = image.load_img(self.screenshot_path, target_size=(self.model.image_width, self.model.image_width))
        _, subplots = plt.subplots(1, len(heatmaps))
        # This is a little janky, but matplotlib returns a list above if there's multiple subplots, and just a single subplot if there's only one
        #   it would have been easier if it was always a list. But alas
        if not heatmaps:
            print("No heatmap made. The image did not have a True classification for any label")
            return
        if len(heatmaps) > 1:
            for i, heatmap in enumerate(heatmaps):
                subplots[i].imshow(screenshot_image, cmap='binary', interpolation='none')
                subplots[i].imshow(heatmap, alpha=0.5, interpolation='none')
                subplots[i].set_title(labels[i])
        else:
            subplots.imshow(screenshot_image, cmap='binary', interpolation='none')
            subplots.imshow(heatmap, alpha=0.5, interpolation='none')
            subplots.set_title(labels[0])
        plt.savefig(output_file)
        print("Heatmap image written to: {}".format(output_file))

    def _get_heatmap(self, label, boxsize):
        worst_score = 1
        self.x, self.y = 0, 0

        heatmap = np.ones((self.model.image_width, self.model.image_height))
        heatmap *= 255
        while True:
            # Occlude an image
            occluded_image, x, y = self._occlude(boxsize)
            if occluded_image is not None:
                # Score the new occluded image
                results = self.model.predict_on_array(occluded_image)
                score = results[label]  # TODO
                worst_score = min(worst_score, score)
                # Scale the score up to pixel values
                score = math.floor(score * 255)
                # Anneal the scores as you go outward into the occlusion block
                new_scores = np.ones((boxsize, boxsize))
                new_scores *= score
                new_scores = self._gamma_anneal(new_scores)

                # For each pixel, update only where the new score is lower
                original_scores = heatmap[x: x+boxsize, y: y+boxsize]

                target_area = np.where(new_scores < original_scores, new_scores, original_scores)
                heatmap[x: x+boxsize, y: y+boxsize] = target_area
            else:
                break

        return heatmap, worst_score

    def _gamma_anneal(self, occlusion_area):
        """ Get the annealed score based on centeredness of the occlusion area """
        width, height = occlusion_area.shape

        center_x = (width-1) / 2
        center_y = (height-1) / 2

        annealed_area = np.zeros(occlusion_area.shape)

        for (x, y), score in np.ndenumerate(occlusion_area):
            distance = math.sqrt((center_x - x)**2 + (center_y - y)**2)
            annealed_area[x, y] = min(255, score + (self.gamma * distance))

        return annealed_area

    def _occlude(self, boxsize):
        ''' Return a single occluded image and its location '''
        if self.x + boxsize > self.screenshot.shape[0]:
            return None, None, None

        retImg = np.copy(self.screenshot)
        retImg[self.x:self.x+boxsize, self.y:self.y+boxsize] = 0.0

        old_i = deepcopy(self.x)
        old_j = deepcopy(self.y)

        # update indices
        self.y = self.y + self.step
        if self.y+boxsize > self.screenshot.shape[1]:  # reached end
            self.y = 0  # reset j
            self.x = self.x + self.step  # go to next row

        return retImg, old_i, old_j

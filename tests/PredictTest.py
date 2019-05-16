import errno
import os
import unittest

from eyeballer.model import EyeballModel, DATA_LABELS

class PredictTest(unittest.TestCase):
    def setUp(self):
        weights_file = "latest_weights.h5"
        if not os.path.isfile(weights_file):
            print("Error: Symlink the latest weights file to 'latest_weights.h5'")
            raise FileNotFoundError(
            errno.ENOENT,
            os.strerror(errno.ENOENT),
            weights_file)

        model_kwargs = {
            "weights_file": weights_file,
            "print_summary": False,
            "seed": None
        }
        self.model = EyeballModel(**model_kwargs)

    def test_different_seed_predict(self):
        model_kwargs = {
            "weights_file": None,
            "print_summary": False,
            "seed": 12345678
        }
        same_seed_model = EyeballModel(**model_kwargs)

        screenshot = "tests/data/test.png"

        results_one = self.model.predict(screenshot)
        results_two = same_seed_model.predict(screenshot)

        self.assertNotEqual(results_one, results_two)

    def test_same_seed_predict(self):
        model_kwargs = {
            "weights_file": None,
            "print_summary": False,
            "seed": 12345678
        }
        same_seed_model = EyeballModel(**model_kwargs)

        screenshot = "tests/data/test.png"

        results_one = same_seed_model.predict(screenshot)
        results_two = same_seed_model.predict(screenshot)

        self.assertEquals(results_one, results_two)

    def get_prediction_by_name(self,results):
        prediction = None
        max_val = 0.0

        print(results)
        for k, v in results[0].items():
            if not isinstance(v, str) and v > max_val:
                    prediction = k
                    max_val = v
        return prediction

    def test_predict_custom404(self):
        screenshot = "tests/data/custom404.png"
        results = self.model.predict(screenshot)
        self.assertEqual(self.get_prediction_by_name(results), "custom404")

    def test_predict_login(self):
        screenshot = "tests/data/login.png"
        results = self.model.predict(screenshot)
        self.assertEqual(self.get_prediction_by_name(results), "login")

    def test_predict_homepage(self):
        screenshot = "tests/data/homepage.png"
        results = self.model.predict(screenshot)
        self.assertEqual(self.get_prediction_by_name(results), "homepage")

    def test_predict_oldlooking(self):
        screenshot = "tests/data/oldlooking.png"
        results = self.model.predict(screenshot)
        self.assertEqual(self.get_prediction_by_name(results), "oldlooking")

import errno
import os
import unittest
import sys

from eyeballer.model import EyeballModel
from eyeballer.visualization import HeatMap


class PredictTest(unittest.TestCase):
    def setUp(self):

        class DummyFile(object):
            def write(self, x): pass
            def flush(self): pass

        sys.stdout = DummyFile()
        model_file = "tests/models/model_file.h5"
        if not os.path.isfile(model_file):
            print("Error: Symlink the latest model file to " + model_file)
            raise FileNotFoundError(
                errno.ENOENT,
                os.strerror(errno.ENOENT),
                model_file)

        model_kwargs = {
            "model_file": model_file,
            "print_summary": False,
            "seed": None,
            "quiet": True
        }
        self.model = EyeballModel(**model_kwargs)

    def test_different_seed_predict(self):
        model_kwargs = {
            "model_file": None,
            "print_summary": False,
            "seed": 12345678,
            "quiet": True
        }
        same_seed_model = EyeballModel(**model_kwargs)

        screenshot = "tests/data/404.png"

        results_one = self.model.predict(screenshot)
        results_two = same_seed_model.predict(screenshot)

        self.assertNotEqual(results_one, results_two)

    def test_same_seed_predict(self):
        model_kwargs = {
            "model_file": None,
            "print_summary": False,
            "seed": 12345678,
            "quiet": True
        }
        same_seed_model = EyeballModel(**model_kwargs)

        screenshot = "tests/data/404.png"

        results_one = same_seed_model.predict(screenshot)
        results_two = same_seed_model.predict(screenshot)

        self.assertEqual(results_one, results_two)

    def test_predict_custom404(self):
        screenshot = "tests/data/404.png"
        results = self.model.predict(screenshot)[0]
        self.assertGreater(results["custom404"], 0.5)

    def test_predict_not_custom404(self):
        screenshot = "tests/data/nothing.png"
        results = self.model.predict(screenshot)[0]
        self.assertLess(results["custom404"], 0.5)

    def test_predict_login(self):
        screenshot = "tests/data/login.png"
        results = self.model.predict(screenshot)[0]
        self.assertGreater(results["login"], 0.5)

    def test_predict_not_login(self):
        screenshot = "tests/data/nothing.png"
        results = self.model.predict(screenshot)[0]
        print(screenshot, results)
        self.assertLess(results["login"], 0.5)

    def test_predict_homepage(self):
        screenshot = "tests/data/homepage.png"
        results = self.model.predict(screenshot)[0]
        self.assertGreater(results["homepage"], 0.5)

    def test_predict_not_homepage(self):
        screenshot = "tests/data/nothing.png"
        results = self.model.predict(screenshot)[0]
        self.assertLess(results["homepage"], 0.5)

    def test_predict_oldlooking(self):
        screenshot = "tests/data/old-looking.png"
        results = self.model.predict(screenshot)[0]
        self.assertGreater(results["oldlooking"], 0.5)

    def test_predict_not_oldlooking(self):
        screenshot = "tests/data/nothing.png"
        results = self.model.predict(screenshot)[0]
        self.assertLess(results["oldlooking"], 0.5)

    def test_file_doesnt_exist(self):
        screenshot = "tests/data/doesnotexist.png"
        try:
            self.model.predict(screenshot)[0]
            self.fail("FileNotFoundError was expected but not found")
        except FileNotFoundError:
            pass

    def test_folder(self):
        screenshots = "tests/data/"
        results = self.model.predict(screenshots)
        self.assertEqual(len(results), 7)

    def test_file_is_empty(self):
        """
        We're just testing that it doesn't crash, basically
        """
        screenshot = "tests/data/empty.png"
        self.model.predict(screenshot)

    def test_file_is_invalid(self):
        """
        We're just testing that it doesn't crash, basically
        """
        screenshot = "tests/data/invalid.png"
        self.model.predict(screenshot)

    def test_heatmap(self):
        screenshot = "tests/data/login.png"
        HeatMap(screenshot, self.model, 0.5)

        screenshot = "tests/data/404.png"
        HeatMap(screenshot, self.model, 0.5)

        screenshot = "tests/data/empty.png"
        HeatMap(screenshot, self.model, 0.5)

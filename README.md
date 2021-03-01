# Eyeballer

![Logo](/docs/eyeballer_logo.png)


Give those screenshots of yours a quick eyeballing.

Eyeballer is meant for large-scope network penetration tests where you need to find "interesting" targets from a huge set of web-based hosts. Go ahead and use your favorite screenshotting tool like normal (EyeWitness or GoWitness) and then run them through Eyeballer to tell you what's likely to contain vulnerabilities, and what isn't.


### Example Labels

| Old-Looking Sites | Login Pages |
| ------ |:-----:|
| ![Sample Old-looking Page](/docs/old-looking.png) | ![Sample Login Page](/docs/login.png) |

| Webapp | Custom 404's |
| ------ |:-----:|
| ![Sample Webapp](/docs/homepage.png) | ![Sample Custom 404](/docs/404.png) |

## What the Labels Mean

**Old-Looking Sites**
Blocky frames, broken CSS, that certain "je ne sais quoi" of a website that looks like it was designed in the early 2000's. You know it when you see it. Old websites aren't just ugly, they're also typically super vulnerable. When you're looking to hack into something, these websites are a gold mine.

**Login Pages**
Login pages are valuable to pen testing, they indicate that there's additional functionality you don't currently have access to. It also means there's a simple follow-up process of credential enumeration attacks. You might think that you can set a simple heuristic to find login pages, but in practice it's really hard. Modern sites don't just use a simple input tag we can grep for.

**Webapp**
This tells you that there is a larger group of pages and functionality available here that can serve as surface area to attack. This is in contrast to a simple login page, with no other functionality. Or a default IIS landing page which has no other functionality. This label should indicate to you that there is a web application here to attack.

**Custom 404**
Modern sites love to have cutesy custom 404 pages with pictures of broken robots or sad looking dogs. Unfortunately, they also love to return HTTP 200 response codes while they do it. More often, the "404" page doesn't even contain the text "404" in it. These pages are typically uninteresting, despite having a lot going on visually, and Eyeballer can help you sift them out.

## Setup

Download required packages on pip:
```
sudo pip3 install -r requirements.txt
```

Or if you want GPU support:
```
sudo pip3 install -r requirements-gpu.txt
```

**NOTE**: Setting up a GPU for use with TensorFlow is way beyond the scope of this README. There's hardware compatibility to consider, drivers to install... There's a lot. So you're just going to have to figure this part out on your own if you want a GPU. But at least from a Python package perspective, the above requirements file has you covered.

**Pretrained Weights**

For the latest pretrained weights, check out the releases.

**Training Data** You can find our training data here:

https://www.dropbox.com/sh/usd03z9s0vnhzxu/AADyJvWgzlL1w4WnaAuxQbQQa?dl=1

Pretty soon, we're going to add this as a TensorFlow DataSet, so you don't need to download this separately like this. It'll also let us version the data a bit better. But for now, just deal with it. There's two things you need from the training data:

1. `images/` folder, containing all the screenshots (resized down to 224x140. We'll have the full-size images up soon)
2. `labels.csv` that has all the labels
3. `bishop-fox-pretrained-v2.h5` A pretrained weights file you can use right out of the box without training.

Copy all three into the root of the Eyeballer code tree.

## Predicting Labels
To eyeball some screenshots, just run the "predict" mode:

```
eyeballer.py --weights YOUR_WEIGHTS.h5 predict YOUR_FILE.png
```

Or for a whole directory of files:

```
eyeballer.py --weights YOUR_WEIGHTS.h5 predict PATH_TO/YOUR_FILES/
```

Eyeballer will spit the results back to you in human readable format (a `results.html` file so you can browse it easily) and machine readable format (a `results.csv` file).


## Training
To train a new model, run:
```
eyeballer.py train
```

You'll want a machine with a good GPU for this to run in a reasonable amount of time. Setting that up is outside the scope of this readme, however.

This will output a new model file (weights.h5 by default).

## Evaluation

You just trained a new model, cool! Let's see how well it performs against some images it's never seen before, across a variety of metrics:

```
eyeballer.py --weights YOUR_WEIGHTS.h5 evaluate
```

The output will describe the model's accuracy in both recall and precision for each of the program's labels. (Including "none of the above" as a pseudo-label)

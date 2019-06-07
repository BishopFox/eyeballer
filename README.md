# Eyeballer
Give those screenshots of yours a quick eyeballing.

Eyeballer is meant for large-scope network penetration tests where you need to find "interesting" targets from a huge set of web-based hosts. Go ahead and use your favorite screenshotting tool like normal (EyeWitness or GoWitness) and then run them through Eyeballer to tell you what's likely to contain vulnerabilities, and what isn't.

## Setup

Download required packages on pip:
```
sudo pip3 install -r requirements.txt
```

## Predicting Labels
To eyeball some screenshots, just run the "predict" mode:

```
eyeballer --weights YOUR_WEIGHTS.h5 predict YOUR_FILE.png
```

Or for a whole directory of files:

```
eyeballer --weights YOUR_WEIGHTS.h5 predict PATH_TO/YOUR_FILES/
```

## Training
To train a new model, run:
```
eyeballer train
```

You'll want a machine with a good GPU for this to run in a reasonable amount of time. Setting that up is outside the scope of this readme, however.

This will output a new model file (weights.h5 by default).

## Evaluation

You just trained a new model, cool! Let's see how well it performs against some images it's never seen before, across a variety of metrics:

```
eyeballer --weights YOUR_WEIGHTS.h5 evaluate
```

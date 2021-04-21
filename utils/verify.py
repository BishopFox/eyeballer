#!/usr/bin/env python3

import csv
import random
from os import listdir
from os.path import isfile, join

with open("labels.csv", newline="") as csvfile:
    # Get the header labels
    csvreader = csv.DictReader(csvfile)
    # fieldnames = next(csvreader)
    file_list = [f for f in listdir("images") if isfile(join("images", f))]

    label_list = []
    for row in csvreader:
        label_list.append(row["filename"])

    # Loop through the file
    print("Rows in labels.csv, but no image exists:")
    for label in label_list:
        if label not in file_list:
            print(row["filename"])

    print("Images that exist, but don't have labels:")
    i = 0
    for image in file_list:
        if image not in label_list:
            print(image)

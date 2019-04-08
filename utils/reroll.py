#!/usr/bin/env python3

import csv
import random

with open("newlabels.csv", "w", newline="") as csvfile:
    # Open the old labels file
    with open("labels.csv", newline="") as oldfile:
        # Get the header labels
        csvreader = csv.DictReader(oldfile)
        fieldnames = next(csvreader)
        labelwriter = csv.DictWriter(csvfile, fieldnames=fieldnames)
        labelwriter.writeheader()

        # Loop through the file
        rows = []
        for row in csvreader:
            row["evaluation"] = random.random() > 0.8
            rows.append(row)
        labelwriter.writerows(rows)
print("Made new labels file: newlabels.csv")

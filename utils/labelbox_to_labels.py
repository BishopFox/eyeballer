#!/usr/bin/env python3

import csv
import random
import json

with open("newlabels.csv", "w", newline="") as csvfile:
    # Open the old labels file
    with open("labelbox.csv", newline="") as oldfile:
        # Get the header labels
        csvreader = csv.DictReader(oldfile)
        fieldnames = next(csvreader)
        labelwriter = csv.DictWriter(csvfile, fieldnames=["filename", "login", "custom404", "homepage", "oldlooking", "evaluation"])
        labelwriter.writeheader()

        # Loop through the file
        rows = []
        for row in csvreader:
            filename = row["External ID"]
            print(row["Label"])
            labelstring = row["Label"]
            if row["Label"] == "Skip":
                labelstring = '{"imageclassification":[]}'
            labels = json.loads(labelstring)

            newrow = dict()
            newrow["filename"] = filename
            newrow["oldlooking"] = True
            newrow["login"] = "loginpage" in labels["imageclassification"]
            newrow["homepage"] = "homepage" in labels["imageclassification"]
            newrow["custom404"] = "custom404"in labels["imageclassification"]

            newrow["evaluation"] = random.random() > 0.8

            rows.append(newrow)
        labelwriter.writerows(rows)
print("Made new labels file: newlabels.csv")

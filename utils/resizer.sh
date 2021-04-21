#!/bin/bash

# Converts full-size images to a given size (replacing the originals)
for f in images_full_size/*
do
	convert -resize 224x224\! $f $f
done

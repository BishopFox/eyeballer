#!/bin/bash

# Converts full-size images to a given size (replacing the originals)
for f in images/*
do
	echo $f
	convert -resize 224x224\! $f $f
done

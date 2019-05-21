#!/usr/bin/env python3

import click
import csv
import os

from eyeballer.model import EyeballModel, DATA_LABELS
from eyeballer.visualization import HeatMap


@click.group(invoke_without_command=True)
@click.option('--weights', default=None, type=click.Path(), help="Weights file for input/output")
@click.option('-v', '--verbose', default=False, help="Verbose TensorFlow Output")
@click.option('--summary/--no-summary', default=False, help="Print model summary at start")
@click.option('--seed', default=None, type=int, help="RNG seed for data shuffling and transformations, defaults to random value")
@click.pass_context
def cli(ctx, weights, verbose, summary, seed):
    if ctx.invoked_subcommand is None:
        print(ctx.get_help())

    if not verbose:
        os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'

    model_kwargs = {"weights_file": weights,
                    "print_summary": summary,
                    "seed": seed}

    #  pass the model to subcommands
    ctx.ensure_object(dict)
    # We only pass the kwargs so we can be lazy and make the model later after the subcommand cli is parsed. This
    # way, the user doesn't have to wait for tensorflow if they are just calling --help on a subcommand.
    ctx.obj['model_kwargs'] = model_kwargs


@cli.command()
@click.option('--graphs/--no-graphs', default=False, help="Save accuracy and loss graphs to file")
@click.option('--epochs', default=20, type=int, help="Number of epochs")  # TODO better help string
@click.option('--batchsize', default=32, type=int, help="Batch size")  # TODO better help string
@click.pass_context
def train(ctx, graphs, batchsize, epochs):
    model = EyeballModel(**ctx.obj['model_kwargs'])
    model.train(print_graphs=graphs, batch_size=batchsize, epochs=epochs)


@cli.command()
@click.argument('screenshot')
@click.option('--heatmap', default=False, is_flag=True, help="Create a heatmap graphfor the prediction")
@click.pass_context
def predict(ctx, screenshot, heatmap):
    model = EyeballModel(**ctx.obj['model_kwargs'])
    results = model.predict(screenshot)

    if heatmap:
        # Generate a heatmap
        HeatMap(screenshot, model).generate()

    if not results:
        print("Error: Input file does not exist")
    if len(results) == 1:
        print(results)
    else:
        with open("results.csv", "w", newline="") as csvfile:
            fieldnames = ["filename", "custom404", "login", "homepage", "oldlooking"]
            labelwriter = csv.DictWriter(csvfile, fieldnames=fieldnames)
            labelwriter.writeheader()
            labelwriter.writerows(results)
        print("Output written to results.csv")


def pretty_print_evaluation(results):
    """Print a human-readable summary of the evaluation"""
    # We use 4.2% to handle all the way from "  0.00%" (7chars) to "100.00%" (7chars)
    for label in DATA_LABELS:
        print(f"{label} Precision Score: {results[label]['precision']:4.2%}")
        print(f"{label} Recall Score: {results[label]['recall']:4.2%}")
    print(f"'None of the above' Precision: {results['none_of_the_above_precision']:4.2%}")
    print(f"'None of the above' Recall: {results['none_of_the_above_recall']:4.2%}")
    print(f"All or nothing Accuracy: {results['all_or_nothing_accuracy']:4.2%}")
    print(f"Overall Binary Accuracy: {results['total_binary_accuracy']:4.2%}")
    print(f"Top 10 worst predictions: {results['top_10_worst'][1]}")


@cli.command()
@click.option('--threshold', default=.5, type=float, help="Threshold confidence for labeling")
@click.pass_context
def evaluate(ctx, threshold):
    model = EyeballModel(**ctx.obj['model_kwargs'])
    results = model.evaluate(threshold)
    pretty_print_evaluation(results)


if __name__ == '__main__':
    cli()

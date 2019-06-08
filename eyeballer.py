#!/usr/bin/env python3

import click
import csv

from eyeballer.model import EyeballModel, DATA_LABELS
from eyeballer.visualization import HeatMap


@click.group(invoke_without_command=True)
@click.option('--weights', default=None, type=click.Path(), help="Weights file for input/output")
@click.option('--summary/--no-summary', default=False, help="Print model summary at start")
@click.option('--seed', default=None, type=int, help="RNG seed for data shuffling and transformations, defaults to random value")
@click.pass_context
def cli(ctx, weights, summary, seed):
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
@click.option('--threshold', default=.5, type=float, help="Threshold confidence for labeling")
@click.pass_context
def predict(ctx, screenshot, heatmap, threshold):
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

        buildHTML(processResults(results, threshold))
        print("HTML is created in results.html")


def processResults(results, threshold):
    '''Filter the initial results dictionary according to threshold and reformat it for use in buildHTML.

        Keyword arguments:
        results -- dictionary output from predict function
        threshold -- argument that specifies minimum acceptabe level of confidence (Ex. eyeballer ... --threshold 0.5) 

    '''
    procesedResults = []

    for result in results:
        positive_label = ''
        pic_info = {}

        for screenshot_label, label in result.items():

            if screenshot_label == 'filename':
                pic_info['filename'] = label
                pic_info['tags'] = ''

            elif label > threshold:
                positive_label += (str(screenshot_label) + ' ') 

        pic_info['tags'] += positive_label
        procesedResults.append(pic_info)

    return procesedResults


def buildHTML(results):
    '''Build HTML by iterating through filtered dictionary and save it under specified name.

        Keyword arguments:
        results -- dictionary output from processResults function
        
    '''
    html_main = '''
    <link rel="stylesheet" type="text/css" href="html_support/style.css">
    <div id="btnsCont">
      <button class="btn all" onclick="filterSelection('all')"> Show all</button>
      <button class="btn" onclick="filterSelection('404')"> 404</button>
      <button class="btn" onclick="filterSelection('login')"> Login</button>
      <button class="btn" onclick="filterSelection('home')"> Home Page</button>
      <button class="btn" onclick="filterSelection('old')"> Old Looking</button>
    </div>
    <div class="container">
    '''
    
    for pic_info in results:
        html_main += ('<div class="filterDiv ' + pic_info['tags'] + 'show"><a href=' + pic_info['filename']  + '>'+ pic_info['tags'].upper() + '</a><img class="res_pic" src="' + pic_info['filename'] + '"></div>\n')

    html_main += '''
    </div>
    <script src="html_support/javasc.js"></script>
    '''
    
    with open('results.html', 'w') as file:
        file.write(html_main)


def pretty_print_evaluation(results):
    """Print a human-readable summary of the evaluation"""
    # We use 4.2% to handle all the way from "  0.00%" (7chars) to "100.00%" (7chars)
    for label in DATA_LABELS:
        print("{} Precision Score: {:4.2%}".format(label, results[label]['precision']))
        print("{} Recall Score: {:4.2%}".format(label, results[label]['recall']))
    print("'None of the above' Precision: {:4.2%}".format(results['none_of_the_above_precision']))
    print("'None of the above' Recall: {:4.2%}".format(results['none_of_the_above_recall']))
    print("All or nothing Accuracy: {:4.2%}".format(results['all_or_nothing_accuracy']))
    print("Overall Binary Accuracy: {:4.2%}".format(results['total_binary_accuracy']))
    print("Top 10 worst predictions: {}".format(results['top_10_worst'][1]))


@cli.command()
@click.option('--threshold', default=.5, type=float, help="Threshold confidence for labeling")
@click.pass_context
def evaluate(ctx, threshold):
    model = EyeballModel(**ctx.obj['model_kwargs'])
    results = model.evaluate(threshold)
    pretty_print_evaluation(results)


if __name__ == '__main__':
    cli()

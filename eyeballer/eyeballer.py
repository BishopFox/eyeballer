#!/usr/bin/env python3
import click
from model import EyeballModel


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
@click.argument('screenshot', nargs=-1)  # Nargs=-1 means you can pass as many in as you want
@click.pass_context
def predict(ctx, screenshot):
    model = EyeballModel(**ctx.obj['model_kwargs'])
    for fn in screenshot:
        model.predict(fn)


def pretty_print_evaluation(results):
    """Print a human-readable summary of the evaulation"""
    print(f"Custom404 Precision Score: {results['custom404']['Precision']:2.0%}")
    print(f"Custom404 Recall Score: {results['custom404']['Recall']:2.0%}")
    print(f"Login Precision Score: {results['login']['Precision']:2.0%}")
    print(f"Login Recall Score: {results['login']['Recall']:2.0%}")
    print(f"Homepage Precision Score: {results['homepage']['Precision']:2.0%}")
    print(f"Homepage Recall Score: {results['homepage']['Recall']:2.0%}")
    print(f"Overall Binary Accuracy: {results['total_binary_accuracy']:2.0%}")
    print(f"All or nothing accuracy: {results['all_or_nothing_accuracy']:2.0%}")


@cli.command()
@click.option('--threshold', default=.5, type=float, help="Threshold confidence for labeling")
@click.pass_context
def evaluate(ctx, threshold):
    model = EyeballModel(**ctx.obj['model_kwargs'])
    results = model.evaluate(threshold)
    pretty_print_evaluation(results)


if __name__ == '__main__':
    cli()

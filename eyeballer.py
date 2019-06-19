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

        buildHTML(processResults(results));
        print("HTML written to results.html")


def processResults(results):
    '''Filter the initial results dictionary and reformat it for use in JS.

        Keyword arguments:
        results -- dictionary output from predict function
        
    '''
    jsResults = {}

    for result in results:
        positiveTags=[]

        for label, label_info in result.items():
            if (label == 'filename'):
                pass
            

            elif (label_info == True) :
            
                positiveTags.append(label)

        jsResults[result['filename']]= positiveTags
    return(jsResults)

def buildHTML(jsResults):
    '''Build HTML around the JS Dictionary that is passed from processResults.

        Keyword arguments:
        jsResults -- dictionary output from processResults function
    '''
    html_main =('''
    <!DOCTYPE HTML>
    <html>
    <title>Eyeballer Results</title>
    <body>
        <div id="btnsCont">
          <button class="btn all" onclick="filterSelection('all')"> Show all</button>
          <button class="btn" onclick="filterSelection('custom404')"> 404</button>
          <button class="btn" onclick="filterSelection('login')"> Login</button>
          <button class="btn" onclick="filterSelection('homepage')"> Home Page</button>
          <button class="btn" onclick="filterSelection('oldlooking')"> Old Looking</button>
            <select onchange="numOnPage=this.value; filterSelection([]);" style="float:right; margin:5px; margin-right:30px; height:30px; width:auto;">
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="250">250</option>
            </select>
        </div>
        <div id="btnsPage">
        </div>
        <div id="container">
        </div>
        <button onclick="topFunction()" id="topBtn" title="Go to top">Top</button>
    </body> 
    <script>
        var results = ''' + str(jsResults) + ''';
        var selectedTags = new Array();
        var btnContainer = document.getElementById("btnsCont");
        var categoryBtns = btnContainer.getElementsByClassName("btn");
        var numOnPage = 100; 
        var indexesToDisplay = [];
        filterSelection([]);
        for (var i = 0; i < categoryBtns.length; i++) {
            categoryBtns[i].addEventListener("click", function () {
                if (this.className.indexOf("active") > -1) {
                    this.className = this.className.replace(" active", "");
                }
                else {
                this.className += " active";
                }
            });
        }
        function filterSelection(c) {
            indexesToDisplay = [];
            var currentIndex = -1;
            if (c == "all") location.reload();
            if (selectedTags.includes(c)!=true) selectedTags=selectedTags.concat(c);
            else selectedTags.splice(selectedTags.indexOf(c),1);
            for (var filename in results){
                    currentIndex++; 
                    var tags = results[filename];
                    var isMissingTag = false;
                    for (var i in selectedTags){
                        if (!tags.includes(selectedTags[i])){
                            isMissingTag = true;
                            break;
                        }
                    }
                    if (isMissingTag === false){
                        indexesToDisplay = indexesToDisplay.concat(currentIndex);
                    }
                }
            buildPageButtons(indexesToDisplay);
            buildHTML(0, numOnPage);
        }
        function buildPageButtons(indexes){
            numOfPages = Math.ceil(indexes.length/numOnPage);
            var html = '';
            for (var i = 0; i < numOfPages; i++){
                html += ('<button class="btnpage" onclick="buildHTML(' + (i*numOnPage) + ', ' + ((i+1)*numOnPage) + '); activatePage(this);">' + (i+1) +'</button>');
            }
            document.getElementById('btnsPage').innerHTML = html;
        }
        function activatePage(pressedBtn){
            var activeNow = document.getElementsByClassName('activePage')
            for (var i = 0; i < activeNow.length; i++){
                activeNow[i].className = activeNow[i].className.replace(" activePage", "");
            }
            pressedBtn.className += ' activePage';
        }
        function buildHTML(rangeMin, rangeMax){
            var html = '';
            if (rangeMax > indexesToDisplay.length) rangeMax=indexesToDisplay.length;
            for (var i = rangeMin; i < rangeMax; i++){
                index=indexesToDisplay[i];
                filename = Object.keys(results)[index];
                html += ('<div class="filterDiv"><a href=' + filename + ' target="_blank"> ' + results[filename].toString().replace(/,/g, ' ') + '</a><img class="res_pic" src="' + filename + '"></div>');
            }
            document.getElementById('container').innerHTML = html;
        }   
        window.onscroll = function() {scrollFunction()};
        function scrollFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("topBtn").style.display = "block";
          } else {
            document.getElementById("topBtn").style.display = "none";
          }
        }
        function topFunction() {
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }
        </script>
        <style>
        #topBtn {
          display: none; /* Hidden by default */
          position: fixed; /* Fixed/sticky position */
          bottom: 20px; /* Place the button at the bottom of the page */
          right: 30px; /* Place the button 30px from the right */
          z-index: 99; /* Make sure it does not overlap */
          border: none; /* Remove borders */
          outline: none; /* Remove outline */
          background-color: #193b72; /* Set a background color */
          color: white; /* Text color */
          cursor: pointer; /* Add a mouse pointer on hover */
          padding: 15px; /* Some padding */
          border-radius: 10px; /* Rounded corners */
          font-size: 18px; /* Increase font size */
          font-weight:bold;
          border:solid;
        }
        #topBtn:hover {
          background-color: #555; 
        }
        .container {
        overflow: hidden;
        }
        #btnsPage {
        margin:10px;
        }
        .btnpage{
            width:40px;
            height:30px;
            background-color: #f1f1f1;
            outline: none;
        }
        .res_pic{
        width:100%;
        height:auto;
        }
        a{
        font-weight:600;
        padding:3px;
        text-decoration: none;
        color:#ffffff;
        font-size:16px;
        font-family:Sans-serif;
        }
        .name{
        float:left;
        }
        .filterDiv {
          float: left;
          background-color: #777;
          color: #ffffff;
          width: 22%;
          border-style:solid;
          border-color:#666;
          text-align: center;
          margin: 10px;
          line-height: 30px;
          display: block;
        }
        .btn {
          border: none;
          outline: none;
          padding: 12px 16px;
          margin-left:10px;
          background-color: #f1f1f1;
          cursor: pointer;
        }
        .btn:hover {
          background-color: #ddd;
        }
        .active {
          background-color: #666;
          color: white;
        }
        .activePage{
            border: solid;
            border-color:#666666;
            color: black;
        }
        .btn.all {
          background-color: #193b72;
          color: white;
        } 
        </style>
    </html>
    ''');

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

var fR = new Array();

var btnContainer = document.getElementById("btnsCont");
var btns = btnContainer.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        
		//var current = document.getElementsByClassName("active");
        //current[0].className = current[0].className.replace(" active", "");
		if (this.className.indexOf("active") > -1) {
			console.log("pressed active")
			this.className = this.className.replace(" active", "");
		}
		else {
		this.className += " active";
		}
		
		console.log(this.className);
        
    });
}



function filterSelection(c) {
	
	if (c == "all") location.reload();
	
	console.log(fR.includes(c));
	
	if (fR.includes(c)!=true) fR=fR.concat(c);
	else fR.splice(fR.indexOf(c),1);

	

	console.log(fR);
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    
    for (i = 0; i < x.length; i++) {
		AddClass(x[i], "show");
		
        for (t = 0; t < fR.length; t++) {
            a = fR[t];
            if (x[i].className.indexOf(a) == -1)
			{
				RemoveClass(x[i], "show");
			}
        }
    }
}

// Show filtered elements
function AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

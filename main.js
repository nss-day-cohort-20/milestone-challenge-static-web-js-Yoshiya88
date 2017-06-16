// Create a tree function that should build a pine tree out of a character in the Chrome dev tools console.

    // A key that specifies the height of the pine tree.
    // The value for the height of the tree should be from user input in a <input type="text"> field in the DOM.
    // A key that specifies which character to use to build the pine tree.
    // The character to use should be from user input in a <input type="text"> field in the DOM.

//on click, button with id "grow" uses checkinput function
var button = document.getElementById("grow");
	button.addEventListener("click", checkInput);

//height and style declared by user input
let height = document.getElementById("height");
let style = document.getElementById("style");

//treeObj holds the user inputted height and style
var treeObj = {
	height: "",
	style: ""
};


//button click runs this function
function checkInput() {
	//if the user input value is missing a character, it returns the alert, else runs button click function
	if(height.value === "" || style.value === ""){
		alert("Put something in that box yo");
	} else {
		buttonClick();
	}
};


function buttonClick() {
	//height and style is declared by user input
	treeObj.height = height.value;
	treeObj.style = style.value;
	console.log("click");
	//display characters in console
	console.log(treeObj);
	//run growTree function on click
	growTree(treeObj);
};


//run growTree using user input values
function growTree(treeObj){
	//basic for loop to only be as long as input height
	for (var i = 0; i < treeObj.height; i++)
	//
	console.log(" ".repeat(treeObj.height - i + 1) + treeObj.style.repeat(2 * i + 1));
}






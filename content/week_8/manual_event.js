// manual_event.js
// example shows how to manually track the state of 
// the mouse button and react when it is pressed

var mouseWasPressed;
var ellipseColor;

function setup() {
	createCanvas(600, 400);
	noStroke();
	ellipseColor = color(100, 0, 0);
}

function draw() {
	background(125, 125, 125);
	
	if (!mouseWasPressed && mouseIsPressed) {
		// this is the moment of a press
		console.log("Now!");
		ellipseColor = color(random(255), random(255), random(255));
	}
	mouseWasPressed = mouseIsPressed;
	
	
	fill(ellipseColor);
	ellipse(300, 200, 150, 150);
}

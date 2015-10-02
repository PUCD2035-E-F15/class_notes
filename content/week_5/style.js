// example script

// draws an ellipse at the location of the mouse
// when the user drags draws a second ellipse at 
// where the drag started and a line between them


// mouseUpX, mouseUpY store the location of the 
// mouse before press/drag
var mouseUpX = 0;
var mouseUpY = 0;

var ellipseSize = 50;

function setup() {
	createCanvas(480, 480);
	fill(100, 150, 50);
	stroke(50, 50, 150);
	strokeWeight(10);
}

function draw() {
	background(125, 125, 125);

	if (!mouseIsPressed) {
		// if the mouse button is up, we need to 
		// store the location
		mouseUpX = mouseX;
		mouseUpY = mouseY;
	} else {
		// if it is down, we need to draw an ellipse 
		// at the stored location
		line(mouseUpX, mouseUpY, mouseX, mouseY);
		ellipse(mouseUpX, mouseUpY, ellipseSize, ellipseSize);
	}

	ellipse(mouseX, mouseY, ellipseSize, ellipseSize);
}



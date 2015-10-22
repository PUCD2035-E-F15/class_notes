// p5_event.js
// example shows how to use a p5 event handler
// to react to the mouse button being pressed

var ellipseColor;

function setup() {
	createCanvas(600, 400);
	noStroke();
	ellipseColor = color(100, 0, 0);
}

function draw() {
	background(125, 125, 125);	
	fill(ellipseColor);
	ellipse(300, 200, 150, 150);
}

function mousePressed() {
	console.log("Now!");
	ellipseColor = color(random(255), random(255), random(255));
}

// a simple p5 sketch that draws an ellipse
// at the location of the mouse cursor

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(0);
	fill(255, 255, 255);
	ellipse(mouseX, mouseY, 100, 100);
}

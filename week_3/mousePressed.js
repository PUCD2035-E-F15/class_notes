// a simple p5 sketch demonstrating mouseIsPressed

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(0);
	
	if (mouseIsPressed) {
		fill(0, 255, 0);
		ellipse(width * 0.5, height * 0.5, 200, 200);
	} else {
		fill(255, 0, 0);
		rectMode(CENTER);
		rect(width * 0.5, height * 0.5, 200, 200);
	}
}

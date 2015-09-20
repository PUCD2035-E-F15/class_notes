// draw a target using a function

var targetSize = 200;

function setup() {
	createCanvas(640, 480);
	noStroke();
}

function draw() {
	background(220, 220, 220);
	drawTarget();
}


function drawTarget() {
	// outside ring
	fill(150, 0, 0);
	ellipse(320, 240, targetSize, targetSize);

	// middle ring
	fill(255, 255, 255);
	ellipse(320, 240, targetSize - 40, targetSize - 40);

	// inside ring
	fill(150, 0, 0);
	ellipse(320, 240, targetSize - 80, targetSize - 80);
}

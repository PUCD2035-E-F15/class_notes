// example of using parameters in funcitons


function setup() {
	createCanvas(640, 480);
	noStroke();
}

function draw() {
	background(220, 220, 220);
	drawTarget(140, 240, 150);
	drawTarget(320, 240, 75);
	drawTarget(500, 240, 125);
}


function drawTarget(x, y, size) {
	// outside ring
	fill(150, 0, 0);
	ellipse(x, y, size, size);

	// middle ring
	fill(255, 255, 255);
	ellipse(x, y, size - 40, size - 40);

	// inside ring
	fill(150, 0, 0);
	ellipse(x, y, size - 80, size - 80);
}

function setup() {
	createCanvas(1140, 641);
}

function draw() {
	background(10);
	fill(255, 255, 255);
	stroke(255, 0, 0);
	ellipse(random(width), random(height), 50, 50);
}

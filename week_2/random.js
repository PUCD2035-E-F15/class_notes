// example of using p5 random()

function setup() {
	createCanvas(640, 480);
	noStroke();
}

function draw() {
	background(220, 220, 220);

	// left ellipse
	fill(random(255), random(255), random(255));
	ellipse(200, 240, 100, 100);

	// right ellipse
	var x = random(-10, 10);
	fill(0);
	ellipse(440 + x, 240, 100, 100);
}

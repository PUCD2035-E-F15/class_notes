// a simple p5 sketch that draws an ellipse

function setup() {
	createCanvas(640, 480);
}

function draw() {
	background(0, 0, 0);
	noFill();
	colorMode(HSL, 100);
	for(i = 0; i < 100; i++){
		stroke(i, 100, 50);
		ellipse(i * 6.4, 240, 200, 200);
	}
}

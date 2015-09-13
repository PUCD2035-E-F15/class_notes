function setup() {
	createCanvas(640, 480);
}

function draw() {
	background(130, 130, 170);
	noFill();
	
	for (var r = 0; r < 800; r += 40) {
		stroke(0, 0, 0);
		ellipse(width * 0.5, height * 0.5, r, r);
		stroke(255, 255, 255);
		ellipse(width * 0.5, height * 0.5, r + 20, r + 20);
	}

}

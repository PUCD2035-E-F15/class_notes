function setup() {
	createCanvas(640, 480);
}

function draw() {
	if(mouseIsPressed) {
		background(50, 50, 100);
		fill(50, 50, 100);
	} else {
		background(150, 0, 0);
		fill(150, 0, 0);
	}

	stroke(255);

	line(mouseX, 0, mouseX, height);
	line(0, mouseY, width, mouseY);

	ellipse(mouseX, mouseY, 40, 40);

}

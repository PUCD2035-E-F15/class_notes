function setup() {
	createCanvas(640, 480);
}

function draw() {
	background(50);
	stroke(255);

	for (var  x = 0; x < 10; x++){
		var xPos = (width / 10.0) * (x + 0.5);
		var yPos = height / 2.0;
		fill((255/9) * x, 0, 0);
		rect(xPos - 25, yPos - 25, 50, 50);
	}
}

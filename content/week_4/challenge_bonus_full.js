function setup() {
	createCanvas(640, 480);

	noStroke();
}

var x = 100;
var y = 100;

function draw() {
	background(50, 50, 50);

	var dX = mouseX - x;
	var dY = mouseY - y;
	var dist = sqrt(dX * dX + dY * dY);
	var speed = 10;
	var scale = speed / dist;

	if (dist > 10) {
		x += dX * scale;
		y += dY * scale;
	}

	ellipse(x, y, 50, 50);

}

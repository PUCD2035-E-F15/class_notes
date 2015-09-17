// a simple p5 sketch demonstrating basic animation


var position = 0;
function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {

	//////////////////////////////
	// update

	// change position
	position = position + 1;

	// don't let the ellipse go to far
	if (position > windowWidth) {
		position = 0;
	}


	//////////////////////////////
	// draw

	background(0);
	ellipse(position, 100, 50, 50);
	
}

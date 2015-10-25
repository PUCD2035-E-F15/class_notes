
function setup() {
	createCanvas(800, 600);
}

function draw() {
	background(200, 200, 200);
	fill(100, 100, 100);
	rect(100, 100, 200, 200);

	
	
	// check the position of the mouse (but not the button)
	// long syntax
	if (mouseX > 100) {
		if (mouseX < 300) {
			if (mouseY > 100) {
				if (mouseY < 300) {
					fill(255, 255, 0);
					ellipse(400, 100, 200, 200);
				}
			}
		}
	}

	// check position of the mouse and the button
	// shorter code with && (and)
	if (mouseIsPressed &&
		 mouseX > 100 &&
		 mouseX < 300 &&
		 mouseY > 100 &&
		 mouseY < 300) {
		fill(255, 0, 0);
		ellipse(100, 100, 100, 100);
	}
	
}





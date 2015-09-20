
function setup() {
	createCanvas(640, 480);
	noStroke();
}

function draw() {
	background(50, 50, 50);

	for (var i = 0; i < 100; i++) {
		ellipse(pickX(), random(100, 200), 10, 10);
	}
}


function pickX() {
	if (random(1) < .5) {
		return random(100, 200);
	} else {
		return random(400, 500);
	}
}

// example of using a data object
var chaser = {x: 0, y: 0};


function setup() {
	createCanvas(640, 480);
}

function draw() {
	background(125, 125, 125);
	
	if (chaser.x < mouseX) {
		chaser.x += 5;
	}

	if (chaser.x > mouseX) {
		chaser.x -= 5;
	}

	if (chaser.y < mouseY) {
		chaser.y += 5;
	}

	if (chaser.y > mouseY) {
		chaser.y -= 5;
	}

	ellipse(chaser.x, chaser.y, 50, 50);
}

// a simple p5 sketch that demonstrates for loops

function setup() {
	createCanvas(640, 480);
}

function draw() {
	background(0, 0, 0);
	
	for (var y = 0; y < 4; y++) {
		if ( y === 2){
			fill(100, 100, 255);
		} else {
			fill(200, 200, 200);
		}
		for (var x = 0; x < 6; x++) {
			ellipse(x * 100, y * 100, 80, 80);
		}
	}
}

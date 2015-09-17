// a simple p5 sketch that demonstrates for loops

function setup() {
	createCanvas(640, 480);
}

function draw() {
	noStroke();

	for (var x = 0; x < 10; x++) {
		for (var y = 0; y < 10; y++) {
			if (floor(mouseX / 64) == x ||  floor(mouseY / 64) == y) {
				fill(random(255), 0, 0);
			} else {
				var c = random(155);
				fill(c, c, c);
			}
			rect(x * 64, y * 64, 64, 64);
		}
	}
}

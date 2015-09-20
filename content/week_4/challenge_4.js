var wigglers = [];


function setup() {
	createCanvas(640, 480);

	for (var i = 0; i < 100; i++) {
		wigglers[i] = {};
		wigglers[i].x = random(0, 640);
		wigglers[i].y = random(0, 640);
		wigglers[i].size = random(1, 30);
		

	}
}

function draw() {
	background(150, 0, 0);
	fill(100, 250, 250);
	noStroke();

	for (var i = 0; i < 100; i++) {
		var w = wigglers[i];
		w.x += random(-5, 5);
		w.y += random(-5, 5);
		
		ellipse(w.x, w.y, w.size, w.size);
	}
}

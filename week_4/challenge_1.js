function setup() {
	createCanvas(640, 480);
	noStroke();
}

function draw() {
	background(100, 190, 250);
	noStroke();
	fill(40, 180, 50);
	rect(0, 280, 640, 200);

	for (i = 0; i < 100; i++) {
		drawFlower(random(-100, 740), 300 + i * 4);
	}
}


function drawFlower(x, y){
	stroke(0, 120, 10);
	strokeWeight(5);
	line(x, y, x, y - 100);
	
	noStroke();
	fill(0, 120, 10);
	ellipse(x, y-100, 15, 15);

	noStroke();
	fill(255, 255, 255, 100);
	

	for(r = 0; r < 5; r++) {
		ellipse(x, y-100, r*10, r*10);
	}
	noLoop();
}

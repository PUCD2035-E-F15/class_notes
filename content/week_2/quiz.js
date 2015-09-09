// a simple p5 sketch that draws an ellipse

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	var seaLevel = height * 0.75;
	noStroke();
	background(180, 210, 240);
	

	// far sea
	fill(50, 100, 200);
	rect(0, seaLevel, width,  height - seaLevel);

	// hull
	fill(150, 0, 0);
	ellipse(width * 0.25, seaLevel - 20, 200, 200);
	
	// middle sea
	fill(30, 80, 200);
	rect(0, seaLevel + 40, width, 200);
	
	// close sea
	fill(10, 60, 200);
	rect(0, seaLevel + 80, width, 200);

	// hull top blocker
	fill(180, 210, 240);
	rect(width * 0.25 - 100, seaLevel - 30, 200, -200);

	// sail
	fill(250, 250, 250);
	triangle(width * 0.25 - 100, seaLevel - 40, width * 0.25, seaLevel - 220, width * 0.25, seaLevel - 40);

	// fill(250, 250, 250);
	// triangle(width * 0.25 + 100, seaLevel - 50, width * 0.25 + 20, seaLevel - 200, width * 0.25 + 20, seaLevel - 50);

	//mast
	fill(150, 0, 0);
	rect(width * 0.25 + 10, seaLevel - 20, 10, -200);


}

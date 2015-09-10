// a simple p5 sketch that draws an ellipse

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	var seaLevel = height * 0.75;
	noStroke();
	background(150, 180, 210);
	

	// hull
	fill(200, 0, 0);
	ellipse(width * 0.5, seaLevel - 100, 300, 300);


	// far sea
	fill(30, 80, 160);
	rect(0, seaLevel, width,  height - seaLevel);

	// hull top blocker
	fill(150, 180, 210);
	rect(width * 0.5 - 150, seaLevel - 100, 300, -300);
	
	// // middle sea
	// fill(30, 80, 200);
	// rect(0, seaLevel + 40, width, 200);
	
	// // close sea
	// fill(10, 60, 200);
	// rect(0, seaLevel + 80, width, 200);

	//mast
	fill(200, 0, 0);
	rect(width * 0.5 - 5, seaLevel - 0, 10, -300);

	// sail
	fill(250, 250, 250);

	var x = width * 0.5 - 5 - 10;
	var y = seaLevel - 100 - 10;


	triangle(x, y, x - 130, y, x, y-180);

	// fill(250, 250, 250);
	// triangle(width * 0.25 + 100, seaLevel - 50, width * 0.25 + 20, seaLevel - 200, width * 0.25 + 20, seaLevel - 50);



}

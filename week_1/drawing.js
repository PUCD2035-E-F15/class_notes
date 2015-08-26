// an example of the basic p5 drawing commands

// these lines tell p5 to create a drawing area that fills the browser window
function setup() {
	createCanvas(windowWidth, windowHeight);
}


function draw() {
	// your drawing commands go here

	// start by clearing the background to gray
	background(200, 200, 200);

	// a red rectangle
	fill(255, 0, 0);
	rect(10, 10, 100, 100);

	// a green circle
	noStroke();
	fill(0, 255, 0);
	ellipse(210, 60, 100, 100);


	// a blue x
	stroke(0, 0, 255);
	strokeWeight(10);
	line(10, 130, 110, 230);
	line(110, 130, 10, 230);
}

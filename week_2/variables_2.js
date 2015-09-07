// draw a target
// this example uses more variables to make 
// it easy to customize the drawing

var targetSize = 250;
var ringSize = 40;

// declare mainColor and secondColor here, so they will be global
var mainColor; 
var secondColor;


function setup() {
	createCanvas(640, 480);
	noStroke();

	// initialize them here, because the p5 commands like 
	// color don't work outside setup/draw
	mainColor = color(100, 100, 200);
	secondColor = color(100, 200, 100);
	console.log(color);

}


function draw() {
	background(220, 220, 220);

	// outside ring
	fill(mainColor);
	ellipse(320, 240, targetSize, targetSize);

	// middle ring
	fill(secondColor);
	ellipse(320, 240, targetSize - ringSize, targetSize - ringSize);

	// inside ring
	fill(mainColor);
	ellipse(320, 240, targetSize - ringSize * 2, targetSize - ringSize * 2);
}

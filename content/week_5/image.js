// a simple p5 sketch that draws an ellipse

var img;
function preload() {
	// note that in your sketches, your load image probably won't require a path.
	// you will use something like loadImage("shell.jpg")
 	img = loadImage("week_5/shell.jpg");
}

function setup() {
	createCanvas(640, 480);
}

function draw() {
	background(125, 125, 125);
	image(img, mouseX, mouseY);
}

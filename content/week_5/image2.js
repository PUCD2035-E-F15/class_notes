// a simple p5 sketch that draws a scaled image

var img;
function preload() {
	// note that in your sketches, your load image probably won't require a path.
	// you will use something like loadImage("shell.jpg")
 	img = loadImage("week_5/shell.jpg");
}

function setup() {
	createCanvas(480, 480);
}

function draw() {
	background(125, 125, 125);
	image(img, 240 - mouseX , 240 - mouseY, mouseX * 2, mouseY * 2);
}

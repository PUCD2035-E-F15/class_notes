var grid_size = 250;
var c = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
}

function draw() {
	// clear the background
	colorMode(RGB, 255);
	background(255, 255, 255, 7);

	// find the grid square
	var gridX = floor(mouseX / grid_size);
	var gridY = floor(mouseY / grid_size);
	
	// set the color
	c++;
	if (c > 255) {
		c = 0;
	}
	colorMode(HSB, 255);
	fill(c, 150, 255);

	// draw the rect
	rect(gridX * grid_size, gridY * grid_size, grid_size, grid_size);
}



// background layer code for creative computing
// class notes sites

// draws a grid of falling boxes

var COLUMN_WIDTH = 125;
var ROW_HEIGHT = 125;

var COLUMNS = 0;
var ROWS = 0;

var tiles;

function setup() {
	createCanvas(windowWidth, windowHeight);
	COLUMNS = ceil(windowWidth / COLUMN_WIDTH);
	ROWS = ceil(windowHeight / ROW_HEIGHT);

	// create a collection of balls
	tiles = [];
	for (row = 0; row < ROWS; row++) {
		for (column = 0; column < COLUMNS; column++) {
			tiles[row * COLUMNS + column] = new Tile(row, column);
		}
	}
}

function draw() {
	background(255, 255, 255);
	fill(255, 255, 255);
	noStroke();


	for (i = 0; i < tiles.length; i++) {
		tiles[tiles.length-i-1].step();
		tiles[tiles.length-i-1].draw();
	}
}


var Tile = function(row, column) {
	this.row = row;
	this.column = column;
	this.color = color(255, 255, 255);
	this.x = column * COLUMN_WIDTH;
	this.y = row * ROW_HEIGHT;
	this.r = 0;
	this.dr = random(-.01, .01);
	this.isFalling = false;
	this.speedX = 0;
	this.speedY = 0;
};

Tile.prototype.step = function() {

	if (this.isFalling) {
		this.speedY += 0.1;
		this.x += this.speedX;
		this.y += this.speedY;
		this.r += this.dr;

		var r = red(this.color);
		var g = green(this.color);
		var b = blue(this.color);
		this.color = color(r * 0.9, g * 0.9, b * 0.9);

	}
	if (mouseX > this.x && mouseX < this.x + COLUMN_WIDTH && mouseY > this.y && mouseY < this.y + ROW_HEIGHT) {
		this.isFalling = true;
	}
};

Tile.prototype.draw = function() {
	push();
	fill(this.color);
	translate(this.x, this.y);
	rotate(this.r);
	rect(0, 0, COLUMN_WIDTH, ROW_HEIGHT);
	pop();
};

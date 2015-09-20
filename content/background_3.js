// background_3

// creates a wavy line that bends towards the mouse

var columnSize = 10;
var columns = [];


function setup() {
	createCanvas(windowWidth, windowHeight);
	columnCount = windowWidth / columnSize;
	
	// store a starting x and y position for each column
	for (var i = 0; i < columnCount + 1; i++) {
		columns[i] = {
			x: i * columnSize,
			y: windowHeight * 0.5
		};
	}

}

function draw() {
	var c, next;
	var i;

	background(255, 255, 255);
	
	noStroke();

	// find the column that the mouse is over
	var mouseC = int(mouseX/columnSize);

	// move the square in the column toward the mouse
	columns[mouseC].y = lerp(columns[mouseC].y, mouseY, 0.2);


	// loop through the columns (except the last one)
	for (i = 0; i < columns.length - 1; i++) {
		// find this column and the next
		c = columns[i];
		next = columns[i+1];
		// move the squares towards each other
		c.y = lerp(c.y, next.y, 0.1);
		next.y = lerp(next.y, c.y, 0.1);
	}

	// loop through again and draw them
	for (i = 0; i < columns.length; i++) {
		c = columns[i];

		fill(200, 200, 200);
		rect(c.x, int(c.y/columnSize) * columnSize, columnSize,  columnSize);

		fill("#9effdd");
		rect(c.x, int(c.y/columnSize) * columnSize + columnSize, columnSize,  columnSize * 5);

	}
}



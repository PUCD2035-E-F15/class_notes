/*
This is a very basic sketch to demonstrate
using comments. Comments are notes meant for
programmers to read, they are ignored by
the computers.

This is a multi-line comment.
*/

// this is a single line comment


// setup a full window drawing area
function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
}

// draw a gray dot on a gray field
function draw() {
	background(200, 200, 200);
	fill(150, 150, 150);

	// using a little math and `width` and `height`
	// to make the circle change shape depending on the
	// window size
	ellipse(width*.5, height*.5, width*.9, width*.9);
}

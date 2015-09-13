// draw a sirpinski triangle

var oneX = 320;
var oneY = 0;
var twoX = 0;
var twoY = 480;
var threeX = 640;
var threeY = 480;

var x = 0;
var y = 0;


function setup() {
	createCanvas(640, 480);
}

function draw() {
 	var r = random(3);
 	if (r < 1) {
 		x = (x + oneX) * 0.5;
 		y = (y + oneY) * 0.5;
 	} else if ( r < 2) {
 		x = (x + twoX) * 0.5;
 		y = (y + twoY) * 0.5;
 	} else {
 		x = (x + threeX) * 0.5;
 		y = (y + threeY) * 0.5;
 	}
 	ellipse(x, y, 1, 1);
}

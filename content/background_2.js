function setup() {
	createCanvas(windowWidth, windowHeight);

}
var drawSize = 2000;

var mX = 0;
var mY = 0;

function draw() {
	background(255, 255, 255, 255);

	mX = lerp(mX, mouseX, .1);
	mY = lerp(mY, mouseY, .1);
	
	// fill(darken(color("#18bc9c"), 2.9));
	fill(145);

	noStroke();
	translate(mX, mY);
	dx = windowWidth * 0.5 - mX;
	dy = windowHeight * 0.5 - mY;
	
	rotate(atan2(dy, dx) + PI * 0.5);


	rect(drawSize * -.5, 0.0, drawSize, drawSize);

}

function darken(c, n) {
	var r = red(c);
	var g = green(c);
	var b = blue(c);

	r *= n;
	g *= n;
	b *= n;
	return color(r, g, b);

}


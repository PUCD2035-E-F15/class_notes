// a simple p5 sketch demonstrating animation


var ballX = 200;
var ballY = 100;
var ballSpeedX = 5;
var ballSpeedY = 5;

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {

	//////////////////////////////
	// update

	// change position
	ballX = ballX + ballSpeedX;
	ballY = ballY + ballSpeedY;
	

	// don't let the ball go to far

	// right
	if (ballX > width) {
		ballSpeedX = -ballSpeedX;
	}

	// bottom
	if (ballY > height) {
		ballSpeedY = -ballSpeedY;
	}

	// left
	if (ballX < 0) {
		ballSpeedX = -ballSpeedX;
	}

	// top
	if (ballY < 0) {
		ballSpeedY = -ballSpeedY;
	}


	//////////////////////////////
	// draw

	background(0);
	ellipse(ballX, ballY, 50, 50);
	
}

// a simple p5 sketch demonstrating animation


var ballX = 200;
var ballY = 100;
var ballSpeedX = 5;
var ballSpeedY = 5;


var ball2X = 100;
var ball2Y = 100;
var ball2SpeedX = 4;
var ball2SpeedY = 4;

function setup() {
	createCanvas(640, 480);
}

function draw() {

	//////////////////////////////
	// update

	// change position
	ballX = ballX + ballSpeedX;
	ballY = ballY + ballSpeedY;

	ball2X = ball2X + ball2SpeedX;
	ball2Y = ball2Y + ball2SpeedY;
	

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

	if (ball2X > width) {
		ball2SpeedX = -ball2SpeedX;
	}

	// bottom
	if (ball2Y > height) {
		ball2SpeedY = -ball2SpeedY;
	}

	// left
	if (ball2X < 0) {
		ball2SpeedX = -ball2SpeedX;
	}

	// top
	if (ball2Y < 0) {
		ball2SpeedY = -ball2SpeedY;
	}


	//////////////////////////////
	// draw

	background(0);
	ellipse(ballX, ballY, 50, 50);
	ellipse(ball2X, ball2Y, 50, 50);
	
}

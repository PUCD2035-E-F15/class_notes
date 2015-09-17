// a simple p5 sketch demonstrating animation


var ballX = 200;
var ballY = 100;
var ballSpeedX = 5;
var ballSpeedY = 5;


function setup() {
	createCanvas(640, 480);
}

function draw() {

	//////////////////////////////
	// update

	if (ballX < mouseX) ballSpeedX = 5;
	if (ballX > mouseX) ballSpeedX = -5;
	if (ballY < mouseY) ballSpeedY = 5;
	if (ballY > mouseY) ballSpeedY = -5;


	// change position
	ballX = ballX + ballSpeedX;
	ballY = ballY + ballSpeedY;


	//////////////////////////////
	// draw

	background(0);
	ellipse(ballX, ballY, 50, 50);


}

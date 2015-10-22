// day_night_functions.js
// example application shows how use a variable
// to keep track of a high level state change
// uses functions to organize state drawing

var currentScene = "day";

var stars = [];
var ballX = 0;

function setup() {
	createCanvas(600, 400);
	noStroke();

	// set up stars
	// create an array of objects to remember the x, y, and color of each star
	for (var i = 0; i < 20; i++) {
		stars[i] = {};
		stars[i].x = random(600);
		stars[i].y = random(300);
		stars[i].color = color(random(200) + 55);
	}
}

function draw() {
	if (currentScene === "day") {
		drawDay();
	} else if (currentScene === "night") {
		drawNight();
	}
}

function drawDay(){
	background(200, 200, 245);
		
	// grass
	fill(50, 160, 60);
	rect(0, 300, 600, 100);

	// sun
	fill(250, 250, 0);
	ellipse(540, 120, 50, 50);


	drawBall();
}


function drawBall() {
	if (ballX < mouseX) {
		ballX = ballX + 5;
	}
	if (ballX > mouseX) {
		ballX = ballX - 5;
	}
	if (ballX < 100) {
		ballX = 100;
	}
	if (ballX > 500) {
		ballX = 500;
	}

	fill(70, 80, 100);
	ellipse(ballX, 320, 70, 70);
}



function drawNight() {
	background(40, 40, 85);

	// grass
	fill(15, 36, 16);
	rect(0, 300, 600, 100);
	
	// draw the stars
	for (var i = 0; i < 20; i++) {
		fill(stars[i].color);
		ellipse(stars[i].x, stars[i].y, 3, 3);
	}

	// moon
	fill(200, 200, 200);
	ellipse(40, 80, 30, 30);

	//drawBall();
}

function mouseReleased() {
	if (currentScene === "day") {
		currentScene = "night";
 	} else {
 		currentScene = "day";
 	}
}

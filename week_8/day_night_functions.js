// day_night_functions.js
// example application shows how use a variable
// to keep track of a high level state change
// uses functions to organize state drawing

var currentScene = "day";

function setup() {
	createCanvas(600, 400);
	noStroke();
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
}

function drawNight() {
	background(40, 40, 85);

	// grass
	fill(15, 36, 16);
	rect(0, 300, 600, 100);
	
	// moon
	fill(200, 200, 200);
	ellipse(40, 80, 30, 30);
}

function mouseReleased() {
	if (currentScene === "day") {
		currentScene = "night";
 	} else {
 		currentScene = "day";
 	}
}

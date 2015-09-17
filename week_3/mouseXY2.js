// a simple p5 sketch that draws a cloud thing
// at the location of the mouse cursor

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(0, 0, 0);
	noStroke();
	fill(255, 255, 255, 50);

	for (var i = 0; i < 100; i++){
		ellipse(mouseX+random(-40, 40), mouseY+random(-40, 40), 20, 20);
	}
}





var a = 0;
	var b = 0;

function setup() {
	createCanvas(480, 480);
	
}

function draw() {
	background(125, 125, 125);
strokeWeight(10);
	if (!mouseIsPressed) {
		a = mouseX;
		b = mouseY;
	} else {
fill(100, 150, 50);
stroke(50, 50, 150);

line(a, b, mouseX, mouseY);

}
if (mouseIsPressed){
fill(100, 150, 50);
stroke(50, 50, 150);
	ellipse(a, b, 50, 50);
}

fill(100, 150, 50);
stroke(50, 50, 150);
	// draw an ellipse
	ellipse(mouseX, mouseY, 50, 50);
}



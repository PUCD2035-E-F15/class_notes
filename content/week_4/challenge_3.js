
function setup() {
  createCanvas(640, 480);
  background(255);
}

function draw() {

	background(90, 90, 110);
	strokeWeight(20);
	
	fill(0,0,0);
	noStroke();
	rect(50, 50, width * 0.5 - 100, height - 100);

	var redX = mouseX;
	var redY = mouseY;
	if (redX < 50) redX = 50;
	if (redY < 50) redY = 50;
	if (redX > width * 0.5 - 50) redX = width * 0.5 - 50;
	if (redY > height - 50) redY = height - 50;
	
	stroke(200, 50, 50);
	line(redX - 30, redY - 30, redX + 30, redY + 30);
	line(redX + 30, redY - 30, redX - 30, redY + 30);


	// float greenX = mouseX;
	// float greenY = mouseY;
	// if (greenX < width * .5 + 50) greenX = width * .5 + 50;
	// if (greenY < 50) greenY = 50;
	// if (greenX > width - 50) greenX = width - 50;
	// if (greenY > height - 50) greenY = height - 50;
	
	// stroke(50, 100, 50);
	// line(greenX - 30, greenY - 30, greenX + 30, greenY + 30);
	// line(greenX + 30, greenY - 30, greenX - 30, greenY + 30);




}

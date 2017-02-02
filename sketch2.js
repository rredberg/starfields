var s;
var starsArray = [];

function setup() {
	createCanvas(
		window.innerWidth,
		window.innerHeight
	);
	//background(51);
	// rect(xcoord, ycoord, width)
	for (var i = 0; i <= 50; i++) {
		s = new Star();
		starsArray.push(s);
	}

	s = new Star();
}
 
function draw() {

	background("black");
	//background(51);
	for (var i = 0; i < starsArray.length; i ++) {
		s = starsArray[i];
		s.update();
		s.display();
	}

	//squaresArray.foreach(function(square)) {
	//	fill(square.color);
	//	rect(square.x, square.y, square.width, square.height);
	//}
}

function star(x, y, radius1, radius2, npoints, rotate) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = rotate / TWO_PI; a < TWO_PI + rotate / TWO_PI; a += angle) {
    var sx = x + cos(a + rotate / TWO_PI) * radius2;
    var sy = y + sin(a + rotate / TWO_PI) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+(halfAngle + rotate / TWO_PI)) * radius1;
    sy = y + sin(a+(halfAngle + rotate / TWO_PI)) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

var Star = function() {

	this.pos = createVector(random(window.innerWidth), random(window.innerHeight));
	this.plane = random(10);
	this.speed = 0.2;
	this.rotate = 0;

	this.update = function() {
		if (this.pos.x < window.innerWidth) {
			this.pos.x += this.speed * this.plane ;
			this.rotate += 0.01;

		} else {
			this.pos.x = 0;
			this.pos.y = random(window.innerHeight);
		}
	}

	this.display = function(){
		noStroke();
		//strokeWeight(2);
		fill(40 + (255 - 40)/10*this.plane);
		//fill(random(255));
		star(this.pos.x, this.pos.y, 10, 5, 5, this.rotate*(this.plane+4));
	}

}

// make them twinkle?
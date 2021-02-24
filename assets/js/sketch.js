// bubbles

var bubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

  b = new Bubble;
  for (var i = 0; i < 50; i++) {
    bubbles[i] = new Bubble();
  }

  for (var i = 0; i < 50; i++) {}
}

function draw() {
  clear();
  noStroke();
  for (var i = 0; i < 50; i++) {
    bubbles[i].update();
    bubbles[i].display();
  }
}

function Bubble() {
  this.x = random(windowWidth);
  this.y = random(windowHeight);
  this.speedX = random(-0.5, 0.5);
  this.speedY = random(-0.5, 0.5);

  this.size = random(20, 200);
  this.opacity = random(40, 80);
  this.colorR = random(220, 230);
  this.colorG = random(220, 230);
  this.colorB = random(230, 255);

  this.display = function() {
    fill(this.colorR, this.colorG, this.colorB, this.opacity);
    ellipse(this.x, this.y, this.size, this.size)
  }

  this.update = function() {

    this.x += this.speedX;
    this.y += this.speedY;


    if (this.x < 0 || this.x > width) {
      this.speedX = -this.speedX;
    }
    if (this.y < 0 || this.y > width) {
      this.speedY = -this.speedY;
    }
  }


  this.intersects = function() {

  }
}

function mousePressed() {}

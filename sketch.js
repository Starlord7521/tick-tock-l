var hr, min, sec;
var scAngle, minAngle, hrAngle;
function setup() {
  createCanvas(800,400);
hr = hour();
min = minute();
sec = second();
}

function draw() {
  background(255,255,255);
  angleMode(DEGREES);
  scAngle = map(sec, 0, 60, 0, 360);
  minAngle = map(min, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 24, 0, 360);
  push();
  rotate(scAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();
  drawSprites();
}
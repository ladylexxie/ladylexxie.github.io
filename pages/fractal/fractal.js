let angle = 0;
let slider;
let slider2;
let slider3;
let w = window.innerWidth;
let h = window.innerHeight - 56;
let segment;
let length;
let canvas;

function setup() {
  canvas = createCanvas(w, h);
  canvas.parent('gameCanvas');
  canvas.position(0, 56);
  console.log(canvas.parent);
  textSize(25);
  slider = createSlider(0, HALF_PI, PI / 4, 0.01);
  slider2 = createSlider(0, 15, 5, 1);
  slider3 = createSlider(0, 300, 150, 10);
  slider.position(20, 20 + 56);
  slider2.position(20, 50 + 56);
  slider3.position(20, 80 + 56);
}

function draw() {
angle = slider.value();
segment = slider2.value();
length = slider3.value();
  background(51);
  stroke(255);
  text(angle, slider.x * 2 + slider.width, 35);
  text(segment, slider2.x * 2 + slider2.width, 65);
  text(length, slider3.x * 2 + slider3.width, 95);
  translate(width/2, height);
  branch(length, segment);
}

function branch(len, seg) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (seg > 1) {
    push();
    rotate(angle);
    branch(len * 0.75, seg - 1);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.75, seg - 1);
    pop();
  }
}

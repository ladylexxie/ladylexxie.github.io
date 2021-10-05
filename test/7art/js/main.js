let radius = 100
let vertexNumbers = 360

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL)
  document.oncontextmenu = function () { return false; }
  // createFPSCam()
  create3DCam()

  angleMode(DEGREES)
  rectMode(CENTER)
  background(51)
}

function draw() {
  background(51)
  lights();

  circles()
}

function circles(){
  stroke(255, 0, 0)
  // noFill()
  for (let count = 0; count < 10; count++) {


    beginShape()
    for (let i = 0; i < 360; i += 360 / vertexNumbers) {
      vertex(
        (sin(frameRate) * 20 + radius) * cos(i),
        0,
        (sin(frameRate) * 20 + radius) * sin(i)
      )
    }
    endShape(CLOSE)
  }
}

function create3DCam() {
  createEasyCam({distance: width*0.6})
}

function createFPSCam() {
  var rover = createRoverCam();
  rover.usePointerLock();    // optional; default is keyboard control only
  rover.setState({           // optional
    position: [-400, -200, -200],
    rotation: [0.4, 0.3, 0],
    sensitivity: 0.001,
    speed: 0.5
  });
}
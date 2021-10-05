let scalingFactor = 1
let grid

function setup() {
  console.clear()
  let canvas = createCanvas(windowWidth, windowHeight)
  canvas.canvas.oncontextmenu = () => false
  noLoop()
  grid = new Grid()
  translate(width / 2, height / 2)
}

function draw() {
  background(51)
  translate(width / 2, height / 2)
  scale(scalingFactor)
  translate(-width / 2, -height / 2)

  grid.show()
}

function mouseWheel(event) {
  if (event.delta > 0) {
    scalingFactor -= 0.05
  } else {
    scalingFactor += 0.05
  }

  scalingFactor = lu.clamp(scalingFactor, 1, 2)
  redraw()
}

function windowResized(){
  resizeCanvas(width, height)
  grid.resize()
}
const WIDTH = 700
const HEIGHT = 450
const LINE_COUNT = 50
const LINE_WIDTH = WIDTH / LINE_COUNT

let lines = []
let menu
let running = false
let arrowRed, arrowGreen
let ar, ag

function setup() {
  createCanvas(WIDTH + 300, HEIGHT, P2D)

  frameRate(2)
  colorMode(HSB)
  textAlign(CENTER, CENTER)
  noStroke()
  noLoop()

  translate(0, height)

  ar = createVector(-100, 0)
  ag = createVector(-100, 0)
  menu = new Menu()
  createLines()
  createArrows()

  menu.show()
  updateLines()
}

function draw() {
  translate(0, height)
  fill(25)
  rect(0, 0, WIDTH, -HEIGHT)
  updateLines()
  showLines()
}

function showInit() {
  let n = lines.length
  let i = 0

  while (!running) {
    if (frameCount % 5 == 0) {
      [lines[i], lines[n - 1 - i]] = [lines[n - 1 - i], lines[i]]
      lines[n - 1 - i].x = n - 1 - i
      lines[i].x = i
      redraw()

      if (i === n - 1) {
        i = 0
      } else {
        i++
      }
    }
  }
}

function createLines() {
  lines = []
  for (let i = 0; i < LINE_COUNT; i++) {
    let j = map(i, 0, LINE_COUNT - 1, 0, height - 25)
    lines.push(new Line(i, j))
  }
}

function createArrows() {
  arrowRed = createGraphics(LINE_WIDTH, 25)
  arrowRed.strokeWeight(3)
  arrowRed.stroke(color(0, 255, 255))
  arrowRed.line(arrowRed.width / 2, 0, arrowRed.width / 2, arrowRed.height)
  arrowRed.line(0, arrowRed.height / 2, arrowRed.width / 2, arrowRed.height)
  arrowRed.line(arrowRed.width, arrowRed.height / 2, arrowRed.width / 2, arrowRed.height)

  arrowGreen = createGraphics(LINE_WIDTH, 25)
  arrowGreen.strokeWeight(3)
  arrowGreen.stroke(color(127, 255, 255))
  arrowGreen.line(arrowGreen.width / 2, 0, arrowGreen.width / 2, arrowGreen.height)
  arrowGreen.line(0, arrowGreen.height / 2, arrowGreen.width / 2, arrowGreen.height)
  arrowGreen.line(arrowGreen.width, arrowGreen.height / 2, arrowGreen.width / 2, arrowGreen.height)
}

function updateLines() {
  lines.forEach((l, i) => {
    l.x = i
  })
}

function showLines() {
  fill(100)
  rect(ar.x * LINE_WIDTH, 0, LINE_WIDTH, -HEIGHT)
  rect(ag.x * LINE_WIDTH, 0, LINE_WIDTH, -HEIGHT)

  lines.forEach(l => {
    l.show()
  })

  image(arrowRed, ar.x * LINE_WIDTH, -HEIGHT)
  image(arrowGreen, ag.x * LINE_WIDTH, -HEIGHT)
}

function resetArrows() {
  ar.set(-100, 0)
  ag.set(-100, 0)
}
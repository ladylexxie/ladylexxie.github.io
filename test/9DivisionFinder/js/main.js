let denominator = 1
let divider = 1
let result = 'Click to start'

let found = false
let running = false

function setup() {
  let s = lu.setScreenRatio(16 / 9)
  createCanvas(s.w, s.h)
  background(51)

  textAlign(CENTER, CENTER)
  rectMode(CENTER)

  noLoop()
}

function draw() {
  background(51)
  translate(width / 2, height / 2)

  noStroke()
  textStyle(BOLD)
  textSize(200)
  fill(
    found ? 0 : 255,
    found ? 255 : 0,
    0
  )
  text(denominator, 0, -100)
  text(divider, 0, 100)
  rect(0, -10, denominator.toString().length * 100, 20)

  textStyle(NORMAL)
  textSize(25)
  fill(255)
  text(result, 0, 200)
}

function windowResized() {
  let s = lu.setScreenRatio(16 / 9)
  resizeCanvas(s.w, s.h)
}

async function findNumbers(x) {
  while (!found) {
    for (let i = 1; i <= denominator; i++) {
      await lu.sleep(50)
      divider = i
      result = denominator / divider
      redraw()
      if (denominator / divider == x) {
        found = true
        result = 'Done!'
        redraw()
        return
      }
      if (!running) return
    }
    denominator++
  }
}

function mousePressed() {
  if (running) {
    running = false
  } else {
    running = true
    findNumbers(16 / 9)
  }
}
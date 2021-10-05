let walls = []
let player

let debugButton
let debug = false

function setup() {
  createCanvas(1366, 768)

  player = new Player(width * 0.5, height * 0.5)
  debugButton = createButton("DEBUG", false)

  debugButton.position(100, 100)
  debugButton.mousePressed(() => { debug = !debug })
}

function draw() {
  background(51)
  if (debug) {
    textAlign(CENTER, CENTER)
    textSize(200)
    noFill()
    text('DEBUGGING\nON', width * 0.5, height * 0.5)
  }

  player.run()
}

function keyPressed() {
  if (debug) {
    if (key == ' ') {
      console.log(player.bullets.length)
    }
  }
}

function toggleDebug() {
  debug = !debug
}
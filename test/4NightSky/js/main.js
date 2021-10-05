let stars = []
let bckgrnd, txt
let whiteLetters = []

const STAR_COUNT = 500

function setup() {
  createCanvas(windowWidth, windowHeight, P2D)
  createSky()
  createText()
  image(bckgrnd, 0, 0)
}

function draw() {
  image(bckgrnd, 0, 0)
  stars.forEach(star => {
    star.update()
    star.show()
  })
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
  createSky()
}

function createSky() {
  bckgrnd = createGraphics(width, height, P2D)
  bckgrnd.loadPixels()
  for (let j = 0; j < height; j++) {
    for (let i = 0; i < width; i++) {
      bckgrnd.pixels[(i + j * bckgrnd.width) * 4 + 0] = 0                                 //  R
      bckgrnd.pixels[(i + j * bckgrnd.width) * 4 + 1] = 0                                 //  G
      bckgrnd.pixels[(i + j * bckgrnd.width) * 4 + 2] = map(j, 0, bckgrnd.height, 0, 100) //  B
      bckgrnd.pixels[(i + j * bckgrnd.width) * 4 + 3] = 255                               //  BRIGHTNESS
    }
  }
  bckgrnd.updatePixels()
}

function createText() {
  txt = createGraphics(width, height)

  txt.background(51)
  txt.fill(255)
  txt.noStroke()
  txt.textAlign(CENTER, CENTER)
  txt.textSize(350)
  txt.textLeading(300)
  txt.text('I LOVE\nYOU', txt.width / 2, txt.height / 2)

  txt.loadPixels()
  for (let j = 0; j < txt.height; j++) {
    for (let i = 0; i < txt.width; i++) {
      if (txt.pixels[(i + j * txt.width) * 4] == 255) {
        whiteLetters.push({
          x: i,
          y: j
        })
      }
    }
  }

  console.log('Created the text')
}

function mousePressed() {
  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push(new Star(
      mouseX,
      mouseY,
      random(10, 16),
      random(200, 255))
    )
  }
}

function keyPressed() {
  if (key == ' ') {
    stars.forEach(star => {
      star.move = true
    })
  }
}
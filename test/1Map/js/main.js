let word, word2
let w = "Lexxie"

let ray, particle

const FOV = 75
let angle = FOV / (-2)

let len, columnWidth
let vertexes = []

let WIDTH, HEIGHT

function setup() {
  createCanvas(windowWidth, windowHeight)
  WIDTH = width
  HEIGHT = height / 2
  textAlign(CENTER, CENTER)
  len = dist(20, 20, WIDTH - 20, HEIGHT - 20)
  columnWidth = (WIDTH - 40) / (FOV * 4)

  createBoundaries()
  particle = new Particle()
}

function draw() {
  background(51)
  fill(25)
  rect(20, 20, WIDTH - 40, HEIGHT - 40)
  line(0, HEIGHT, WIDTH, HEIGHT)

  lu.showFPS(0, 0, 0.75)

  for (let wall of boundaries) {
    wall.run()
  }
  runControls()

  particle.look(boundaries)

  show3D()

  // line(particle.pos.x, particle.pos.y, mouseX, mouseY)
}

function createText() {
  word = createGraphics(width, height)
  word.fill(255, 255, 255)
  word.noStroke()
  word.background(0)
  word.textAlign(CENTER, CENTER)
  word.textSize(350)
  word.textFont('Script MT')
  word.text(w, width / 2, height / 2)
  word.loadPixels()

  word2 = createGraphics(width, height)
  word2.background(51, 1)
  word2.fill(51, 5)
  word2.noStroke()
  word2.textAlign(CENTER, CENTER)
  word2.textSize(350)
  word2.textFont('Script MT')
  word2.text(w, width / 2, height / 2)

}
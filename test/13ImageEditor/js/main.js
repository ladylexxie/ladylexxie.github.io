let particles = []
const numberOfParticles = 2000;
const detail = 1;
const raw = new Image()
let grid

function init() {
  for (let i = 0; i < numberOfParticles; i++) {
    particles.push(new Particle())
  }
}

function setup() {
  noLoop()
  raw.src = imageData
  raw.addEventListener('load', () => {
    let canvas = createCanvas(500, 300)
    canvas.drawingContext.drawImage(raw, 0, 0, width, height)
    loadPixels()
    clear()

    grid = []
    for (let y = 0; y < height; y += detail) {
      let row = []
      for (let x = 0; x < width; x++) {
        let r = pixels[y * 4 * width + x * 4]
        let g = pixels[y * 4 * width + x * 4 + 1]
        let b = pixels[y * 4 * width + x * 4 + 2]
        let brightness = calculateBrightness(r, g, b) / 100
        row.push(brightness)
      }
      grid.push(row)
    }

    init()
    loop()
    noStroke()
  })
}

function draw() {
  background(0, 0.05)
  particles.forEach(particle => {
    particle.update()
    particle.draw()
  })
}

function calculateBrightness(r, g, b) {
  return sqrt(
    pow(r, 2) * 0.299 +
    pow(g, 2) * 0.587 +
    pow(b, 2) * 0.114
  )
}
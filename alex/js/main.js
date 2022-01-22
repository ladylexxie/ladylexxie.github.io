let numberOfHearts = 200;
let heartList = []
let bigHeart, backgroundImage
let systems = []
let timer = 30

function preload() {
  // backgroundImage = loadImage('img/teamof2.gif')
  backgroundImage = loadGif('img/teamof2.gif')
}

function setup() {
  rectMode(CENTER)
  textAlign(CENTER)
  textStyle(BOLD)
  imageMode(CORNERS)
  textFont('Brush Script MT')
  frameRate(30)

  createCanvas(windowWidth, windowHeight)
  // image(backgroundImage, 0, 0, width, height)
  // backgroundImage = loadGif('img/teamof2.gif')

  initializeHearts()
}

function draw() {
  // if (backgroundImage.loaded())
  background(14)
  image(backgroundImage, 0, 0, width, height)

  for (let i = 0; i < numberOfHearts; i++) {
    heartList[i].update()
    heartList[i].show()
    if (heartList[i].y < -50) {
      heartList[i] = new BackgroundHeart(random(0, width), height + 50, random(0.1, 0.3), random(3, 7))
    }
  }

  for (let i = 0; i < systems.length; i++) {
    if (systems[i]) {
      systems[i].run()
      if (systems[i].isEmpty()) systems.splice(i, 1)
    }
  }

  if (frameCount % timer == 0) {
    system = new ParticleSystem(createVector(random(0, windowWidth), random(0, windowHeight)))
    system.createParticles()
    systems.push(system)
  }
}

function initializeHearts() {
  for (let i = 0; i < numberOfHearts; i++) {
    heartList[i] = new BackgroundHeart(random(0, width), random(0, height), random(0.1, 0.3), random(3, 7))
  }
}

function mouseClicked() {
  let system = new ParticleSystem(createVector(mouseX, mouseY))
  system.createParticles()
  systems.push(system)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

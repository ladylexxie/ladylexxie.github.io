let particles

function init(){
  particles = []
  for (let i = 0; i < 50; i++) {
    particles.push(new Particle())
  }
}

function setup(){
  createCanvas(windowWidth, windowHeight)
  init()
}

function draw(){
  background(51)
  // background('rgba(51, 51, 51, 0.05)')
  particles.forEach(particle => {
    particle.update()
    particle.render()
  })
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}
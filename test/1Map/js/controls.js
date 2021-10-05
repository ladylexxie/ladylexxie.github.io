let moveRight = false
let moveLeft = false
let moveUp = false
let moveDown = false

function showControls(x, y) {
  push()
  rectMode(CENTER)
  translate(x, y)
  textSize(50)
  noFill()
  stroke(255)
  if (moveUp) {
    strokeWeight(5)
    stroke(255, 0, 0)
    rect(75, 25, 50)
    text('˄', 75, 25)
  } else {
    strokeWeight(1)
    stroke(255)
    rect(75, 25, 50)
    text('˄', 75, 25)
  }
  if (moveLeft) {
    strokeWeight(5)
    stroke(255, 0, 0)
    rect(25, 75, 50)
    text('˂', 25, 75)
  } else {
    strokeWeight(1)
    stroke(255)
    rect(25, 75, 50)
    text('˂', 25, 75)
  }
  if (moveDown) {
    strokeWeight(5)
    stroke(255, 0, 0)
    rect(75, 75, 50)
    text('˅', 75, 75)
  } else {
    strokeWeight(1)
    stroke(255)
    // rect(75, 75, 50)
    line(50, 100, 100, 100)
    text('˅', 75, 75)
  }
  if (moveRight) {
    strokeWeight(5)
    stroke(255, 0, 0)
    rect(125, 75, 50)
    text('˃', 125, 75)
  } else {
    strokeWeight(1)
    stroke(255)
    rect(125, 75, 50)
    text('˃', 125, 75)
  }
  pop()
}

function runControls() {
  if (keyIsDown(UP_ARROW)) {
    moveUp = true
  } else { moveUp = false }
  if (keyIsDown(LEFT_ARROW)) {
    moveLeft = true
  } else { moveLeft = false }
  if (keyIsDown(DOWN_ARROW)) {
    moveDown = true
  } else { moveDown = false }
  if (keyIsDown(RIGHT_ARROW)) {
    moveRight = true
  } else { moveRight = false }

  if (moveUp) {
    particle.update(particle.pos.x, particle.pos.y - 5)
  }
  if (moveDown) {
    particle.update(particle.pos.x, particle.pos.y + 5)
  }
  if (moveLeft) {
    particle.update(particle.pos.x - 5, particle.pos.y)
  }
  if (moveRight) {
    particle.update(particle.pos.x + 5, particle.pos.y)
  }

  if (angle >= 360) {
    angle = 0
  } else if (angle < 0) {
    angle = 360 + angle
  }

  let a = degrees(atan2(mouseY - particle.pos.y, mouseX - particle.pos.x))
  angle = a - FOV/2
  particle.updateRays()
}

function show3D() {
  push()
  noStroke()
  fill(25)
  translate(20, HEIGHT + HEIGHT / 2)
  rect(0, -HEIGHT / 2 + 20, WIDTH - 40, HEIGHT - 40)

  stroke(255, 0, 0)
  noFill()
  rect(0, -HEIGHT / 2 + 20, WIDTH - 40, HEIGHT - 40)
  strokeWeight(20)
  rectMode(CENTER)
  noStroke()

  let d = 0
  vertexes = []
  let l = particle.rays.length
  let j = 0
  for (let i = 0; i < l; i++) {
    let ray = particle.rays[i]
    d = map(p5.Vector.dist(particle.pos, ray.pt), 0, len, 1, 0)
    let columnHeight = d * (HEIGHT - 40)
    fill(255, d * 255)
    rect(columnWidth / 2 + columnWidth * i, 0, columnWidth, columnHeight)

    vertexes[j] = createVector(columnWidth * i, -columnHeight / 2)
    vertexes[j + 1] = createVector(columnWidth * (i + 1), -columnHeight / 2)

    vertexes[(l * 4 - 1) - j] = createVector(columnWidth * i, columnHeight / 2)
    vertexes[(l * 4 - 1) - j - 1] = createVector(columnWidth * (i + 1), columnHeight / 2)
    j += 2
  }

  stroke(255, 0, 0)
  strokeWeight(3)
  noFill()
  beginShape()
  for (let i = 0; i < vertexes.length; i++) {
    vertex(vertexes[i].x, vertexes[i].y)
  }
  endShape()
  pop()
  showControls(20, 20)
}
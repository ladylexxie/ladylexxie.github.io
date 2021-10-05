class Star {
  constructor(x, y, size, b) {
    this.pos = createVector(x, y)
    this.acc = createVector(0, 0)
    let temp = random(whiteLetters)
    this.targetPos = createVector(temp.x, temp.y)
    this.vel = createVector(0, 5)
    this.size = size
    this.brightness = b
    this.theta = 0
    this.glowSpeed = random(0.01, 0.1)
    this.move = false
    this.maxspeed = 2
  }

  show() {
    let temp = map(sin(this.theta), -1, 1, 0, 1)
    noStroke()
    fill(temp * this.brightness)
    ellipse(this.pos.x, this.pos.y, temp * this.size)
  }

  update() {
    this.theta += this.glowSpeed

    if (this.move) {
      this.acc = p5.Vector.sub(this.targetPos, this.pos)
      this.vel.add(this.acc)
      this.vel.limit(this.maxspeed)
      this.pos.add(this.vel)
      this.acc.mult(0)
    }

    if (this.pos.dist(this.targetPos) <= 2) {
      this.move = false
    }
  }
}
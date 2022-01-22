class HeartParticle {
  constructor(position) {
    this.position = position.copy()
    this.lifespan = 40
    this.velocity = createVector(random(-5, 5), random(-5, 5))
    this.size = random(0.05, 0.1)
  }

  run() {
    this.update()
    this.show()
  }

  update() {
    this.position.add(this.velocity)
    this.lifespan--;
  }

  show() {
    push()
    stroke(0, this.lifespan)
    fill(184, 0, 0, this.lifespan)

    beginShape()
    vertex(this.position.x, this.position.y)
    bezierVertex(
      this.position.x, this.position.y - 150 * this.size,
      this.position.x + 310 * this.size, this.position.y - 60 * this.size,
      this.position.x, this.position.y + 200 * this.size
    )
    bezierVertex(
      this.position.x - 310 * this.size, this.position.y - 60 * this.size,
      this.position.x, this.position.y - 150 * this.size,
      this.position.x, this.position.y
    )
    endShape()
    pop()
  }

  isDead() {
    return this.lifespan < 0 ? true : false
  }
}

class Ball {
  constructor(x, y) {
    this.pos = createVector(x, y)
    this.speed = 5
    this.friction = 0.8
    this.vel = createVector(0, 0)
    this.acc = createVector(0, 0)
    this.maxSpeed = 10
  }

  render() {
    push()
    noStroke()
    fill(`rgb(255,0,0)`)
    ellipse(this.pos.x, this.pos.y, 30)
    pop()
  }

  update() {
    this.acc.mult(0)
    if(this.pos.y > height * 0.8){
      if(this.pos.x < width / 2){
        this.applyForce(createVector(1, 0.2).normalize().mult(5))
      } else {
        this.applyForce(createVector(-1, 0.2).normalize().mult(5))
      }
    } else {
      this.applyForce(gravity)
    }
    this.vel.add(this.acc.mult(this.friction))
    if(this.vel.mag() > this.maxSpeed) this.vel.setMag(this.maxSpeed)
    this.pos.add(this.vel)
  }

  applyForce(force) {
    this.acc.add(force)
  }
}
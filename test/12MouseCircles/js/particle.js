class Particle{
  constructor(){
    this.angle = random(TWO_PI)
    this.distance = random(4, 32)
    this.x = width * 0.5
    this.y = height * 0.5
    this.radius = random(4, 8)
    this.color = 'red'
    this.velocity = 0.2
    // this.angleSpeed = random(0.02, 0.04)
    this.angleSpeed = (64 - this.distance) * 0.001
    this.trail = [{x: this.x, y: this.y}]
  }

  update(){
    let d = this.distance
    if(mouseIsPressed){
      d = this.distance * 2
    }

    this.trail.push({x: this.x, y: this.y})
    if(this.trail.length > 20){
      this.trail.splice(0, 1)
    }

    const xx = cos(this.angle) * d
    const yy = sin(this.angle) * d

    this.x = (mouseX - this.x) * this.velocity + this.x + xx
    this.y = (mouseY - this.y) * this.velocity + this.y + yy

    this.angle += this.angleSpeed
  }

  render(){
    push()
    drawingContext.shadowBlur = this.radius
    drawingContext.shadowColor = this.color
    noFill()
    // noStroke()
    stroke(this.color)
    strokeWeight(this.radius * 2)

    beginShape()
    this.trail.forEach((point, i) => {
      vertex(point.x, point.y)
      // fill(`rgba(255, 0, 0, ${100 - i * 20})`)
      // ellipse(point.x, point.y, this.radius * 2)
    })
    endShape()
    pop()
  }
}
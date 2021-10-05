class Wall {
  constructor(x, y, w, h, c) {
    this.pos = createVector(x, y)
    this.size = { w, h }
    this.color = c ? c : 255
  }

  render(){
    push()

    fill(this.color)
    // noStroke()
    rect(this.pos.x, this.pos.y, this.size.w, this.size.h)

    pop()
  }
}
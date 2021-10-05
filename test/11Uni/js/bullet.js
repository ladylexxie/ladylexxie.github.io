class Bullet{
  constructor(x, y, dirX, dirY){
    this.pos = createVector(x, y)
    this.dir = createVector(dirX, dirY).normalize().mult(10)
    this.size = 10
    this.outside = false
  }

  run(){
    this.update()
    this.render()
  }

  update(){
    this.pos.add(this.dir)
    
    if (this.pos.x > width - 50) this.outside = true
    if (this.pos.x < 50) this.outside = true
    if (this.pos.y > height - 50) this.outside = true
    if (this.pos.y < 50) this.outside = true
  }

  render(){
    push()

    fill(255)
    noStroke()

    translate(this.pos.x, this.pos.y)
    ellipse(0, 0, this.size)

    pop()
  }
}
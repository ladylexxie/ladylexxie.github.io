class BackgroundHeart {
  constructor(x, y, size, speed) {
    this.theta = 0
    this.x = x
    this.y = y
    this.size = size
    this.speed = speed
    this.dir = random()
    // this.text = random([''])
    this.text = 'Alex'
    this.color = color(floor(random(100, 255)), 0, 0)
  }

  show() {
    push()
    fill(this.color)

    beginShape()
    vertex(this.x, this.y)
    bezierVertex(
      this.x, this.y - 150 * this.size,
      this.x + 310 * this.size, this.y - 60 * this.size,
      this.x, this.y + 200 * this.size
    )
    bezierVertex(
      this.x - 310 * this.size, this.y - 60 * this.size,
      this.x, this.y - 150 * this.size,
      this.x, this.y
    )
    endShape()

    fill(0)
    textSize(this.size * 100)
    text(this.text, this.x, this.y + 70 * this.size)
    pop()
  }

  update() {
    this.theta = this.dir < 0.5 ? this.speed / 150 : this.speed / -150

    this.y -= this.speed
    this.x += sin(this.theta) * 10 * this.size
  }
}

class Player {
  constructor(x, y) {
    this.pos = createVector(x, y)
    this.angle = -HALF_PI
    this.speed = 5
    this.sprite = loadImage('assets/player/player.png')

    this.bullets = []
  }

  run() {
    this.update()
    this.render()
  }

  update() {
    this.angle = atan2(mouseY - this.pos.y, mouseX - this.pos.x)

    if (mouseIsPressed && frameCount % 5 == 0) {
      this.bullets.push(new Bullet(
        34 * cos(this.angle) + this.pos.x,
        34 * sin(this.angle) + this.pos.y,
        mouseX - this.pos.x,
        mouseY - this.pos.y
      ))
    }

    if (keyIsDown(87)) { this.pos.y -= this.speed }
    if (keyIsDown(65)) { this.pos.x -= this.speed }
    if (keyIsDown(83)) { this.pos.y += this.speed }
    if (keyIsDown(68)) { this.pos.x += this.speed }

    if (this.pos.x > width - 67) { this.pos.x = width - 67 }
    if (this.pos.x < 67) { this.pos.x = 67 }
    if (this.pos.y > height - 67) { this.pos.y = height - 67 }
    if (this.pos.y < 67) { this.pos.y = 67 }

    this.bullets.forEach((bullet, i) => {
      bullet.update()
      if (bullet.outside) this.bullets.splice(i, 1)
    })
  }

  render() {
    push()

    translate(this.pos.x, this.pos.y)
    rotate(this.angle)

    if (!debug) {
      image(this.sprite, -this.sprite.height * 0.5, -this.sprite.height * 0.5)
    }

    pop()

    this.bullets.forEach(bullet => {
      bullet.render()
    })

    if (debug) {
      stroke(0)
      fill(0, 0, 255)
      ellipse(this.pos.x, this.pos.y, 34)
      noFill()
      ellipse(this.pos.x, this.pos.y, 68)
      line(this.pos.x, this.pos.y, 35 * cos(this.angle) + this.pos.x, 35 * sin(this.angle) + this.pos.y)
    }
  }
}
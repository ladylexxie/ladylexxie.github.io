class Gem {
  constructor(c, size) {
    this.size = size
    if (c) { this.color = color(c[0], c[1], c[2]) }
    this.hovered = false
  }

  show(x, y, rot) {
    push()
    translate(x, y)
    rotate(rot)
    strokeWeight(1 * this.size)
    if (this.color) {
      fill(this.color)
      stroke(0)
    } else {
      noFill()
      stroke(255)
    }

    if (this.hovered) {
      beginShape()
      vertex(15 * this.size, 0)
      vertex(30 * this.size, 15 * this.size)
      vertex(15 * this.size, 60 * this.size)
      endShape(CLOSE)

      beginShape()
      vertex(-15 * this.size, 0)
      vertex(-30 * this.size, 15 * this.size)
      vertex(-15 * this.size, 60 * this.size)
      endShape(CLOSE)

    } else {
      beginShape()
      vertex(0, 0)
      vertex(15 * this.size, 15 * this.size)
      vertex(0, 60 * this.size)
      endShape(CLOSE)

      beginShape()
      vertex(0, 0)
      vertex(-15 * this.size, 15 * this.size)
      vertex(0, 60 * this.size)
      endShape(CLOSE)
    }

    pop()
  }
}

function mousePressed(e) {
  if (e.button == 0) {
    staticGem.hovered = true
  } else if (e.button == 2) {
    staticGem.hovered = false
  }
}
class Board {
  show() {
    push()
    noStroke()
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        fill((i + j) % 2 == 0 ? 200 : color(117, 53, 0))
        rect(i * 100, j * 100, 100)
      }
    }

    noFill()
    strokeWeight(10)
    stroke(0)
    rect(0, 0, 800, 800, 12)

    for (let i = 0; i < 7; i++) {
      line(100 + 100 * i, 0, 100 + 100 * i, 800)
      line(0, 100 + 100 * i, 800, 100 + 100 * i)
    }
    pop()
  }
}
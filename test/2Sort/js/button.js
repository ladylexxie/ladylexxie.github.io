class Button {
  constructor(txt) {
    this.text = txt.replace(' ', '\n')
    this.selected = false
  }

  show(x, y, w, h, s) {
    push()
    noFill()
    strokeWeight(5)
    stroke(this.selected ? color(0, 255, 255) : 255)
    rect(
      this.selected ? x + 5 : x,
      this.selected ? y + 5 : y,
      this.selected ? w - 10 : w,
      this.selected ? h - 10 : h
      )
    textSize(this.selected ? s * 0.8 : s)
    strokeWeight(1)
    fill(this.selected ? color(0, 255, 255) : 255)
    textLeading(s)
    text(this.text, x + w / 2, y + h / 2)
    pop()
  }
}
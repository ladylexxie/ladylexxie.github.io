class Line {
  constructor(posX, height) {
    this.height = height
    this.x = posX
    this.color = color(map(posX, 0, LINE_COUNT - 1, 0, 255), 255, 255)
    this.width = LINE_WIDTH
  }

  setX(x){
    this.x = x
  }

  show() {
    fill(this.color)
    rect(this.x * this.width, 0, this.width, -this.height)
  }
}
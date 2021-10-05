class Grid {
  constructor() {
    this.cellSize = 15
    this.cols = width / this.cellSize * 3
    this.selectedCells = []
    this.createGrid()
    this.lastCell = undefined
  }

  createGrid() {
    this.grid = createGraphics(width, height)
    this.grid.noFill()
    this.grid.strokeWeight(0.5)

    for (let i = 0; i < this.cols; i++) {
      this.grid.line(0, i * this.cellSize, width, i * this.cellSize)
      this.grid.line(i * this.cellSize, 0, i * this.cellSize, height)
    }

    this.grid.line(width, 0, width, height)
    this.grid.line(0, height, width, height)
  }

  show() {
    image(this.grid, 0, 0)

    push()
    noStroke()

    this.selectedCells.forEach(cell => {
      fill(cell.color)
      rect(cell.x * this.cellSize, cell.y * this.cellSize, this.cellSize, this.cellSize)
    })
    pop()
  }

  selectCell(x, y, color) {
    let found = false

    for (let i = 0; i < this.selectedCells.length; i++) {
      let cell = this.selectedCells[i]
      if (cell.x == x && cell.y == y) {
        this.selectedCells.splice(i, 1)
        found = true
        break
      }
    }

    if (!found) {
      let cell = { x, y, color }
      this.selectedCells.push(cell)
      this.lastCell = cell
    }
  }

  resize(){
    this.cols = width / this.cellSize * 3
    this.createGrid()
  }
}

function mousePressed(e) {
  // let nWidth = width - 
  // let nHeight = 
  // let mx = map(mouseX, 0, width, width-width)
  // let my = map(mouseY, 0, height, )
  let mx = mouseX
  let my = mouseY

  if (e.button === 0) {
    let x = floor(mx / grid.cellSize)
    let y = floor(my / grid.cellSize)
    grid.selectCell(x, y, color(255, 0, 0, 100))
    redraw()
  }

  if (e.button === 2 && grid.lastCell) {
    let x1 = grid.lastCell.x * grid.cellSize
    let y1 = grid.lastCell.y * grid.cellSize
    let x2 = floor(mx / grid.cellSize)
    let y2 = floor(my / grid.cellSize)

    grid.selectCell(x2, y2, color(0, 0, 255, 100))
    redraw()
  }
}
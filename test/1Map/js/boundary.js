class Boundary {
  constructor(x1, y1, x2, y2) {
    this.a = createVector(x1, y1)
    this.b = createVector(x2, y2)
  }

  run() {
    this.update()
    this.show()
  }

  show() {
    push()
    fill(0)
    stroke(255, 0, 0)
    line(this.a.x, this.a.y, this.b.x, this.b.y)
    pop()
  }

  update() {

  }
}

function createBoxBoundary(x, y, w, h) {
  boundaries.push(new Boundary(x - w / 2, y - w / 2, x + h / 2, y - h / 2))
  boundaries.push(new Boundary(x + w / 2, y - w / 2, x + h / 2, y + h / 2))
  boundaries.push(new Boundary(x - w / 2, y + w / 2, x + h / 2, y + h / 2))
  boundaries.push(new Boundary(x - w / 2, y - w / 2, x - h / 2, y + h / 2))
}

function createCircleBoundary(x, y, r) {
  let res = 8
  let deg = 360 / res

  for (let i = 0; i < res; i++) {
    let x1 = r * cos(radians(i * deg))
    let y1 = r * sin(radians(i * deg))
    let x2 = r * cos(radians((i + 1) * deg))
    let y2 = r * sin(radians((i + 1) * deg))
    boundaries.push(new Boundary(x + x1, y + y1, x + x2, y + y2))
  }
}

let boundaries = []

function createBoundaries() {
  boundaries.push(new Boundary(20, 20, WIDTH - 20, 20))//top
  boundaries.push(new Boundary(WIDTH - 20, 20, WIDTH - 20, HEIGHT - 20))//right
  boundaries.push(new Boundary(20, HEIGHT - 20, WIDTH - 20, HEIGHT - 20))//bottom
  boundaries.push(new Boundary(20, 20, 20, HEIGHT - 20))//left

  createBoxBoundary(WIDTH / 3, HEIGHT / 2, 100, 100)
  createBoxBoundary(WIDTH / 3 * 2, HEIGHT / 2, 100, 100)
  createCircleBoundary(WIDTH / 2, HEIGHT / 2, 50)
}
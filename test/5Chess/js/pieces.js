class WhitePawn extends Piece {
  constructor(x, y) {
    super(x, y, whitePieces[0], [
      createVector(0, -1),
      createVector(0, -2)
    ], 'white')
    this.firstMove = true
  }

  show() {
    super.show()
  }

  move(x, y) {
    super.move(x, y)
  }
}

class WhiteRook extends Piece {
  constructor(x, y) {
    super(x, y, whitePieces[1], [], 'white')
    this.selected = false
    this.mov = []
    for (let i = 1; i <= 7; i++) {
      this.mov.push(createVector(0, i))
      this.mov.push(createVector(0, -i))
      this.mov.push(createVector(i, 0))
      this.mov.push(createVector(-i, 0))
    }
  }

  show() {
    super.show()
  }

  move(x, y) {
    super.move(x, y)
  }
}

class WhiteKnight extends Piece {
  constructor(x, y) {
    super(x, y, whitePieces[2], [
      createVector(1, -2),
      createVector(2, -1),
      createVector(2, 1),
      createVector(1, 2),
      createVector(-1, 2),
      createVector(-2, 1),
      createVector(-2, -1),
      createVector(-1, -2)
    ], 'white')
  }

  show() {
    super.show()
  }

  move(x, y) {
    super.move(x, y)
  }
}

class WhiteBishop extends Piece {
  constructor(x, y) {
    super(x, y, whitePieces[3], [], 'white')
    this.mov = []
    for (let i = 1; i <= 7; i++) {
      this.mov.push(createVector(i, i))
      this.mov.push(createVector(i, -i))
      this.mov.push(createVector(-i, i))
      this.mov.push(createVector(-i, -i))
    }
  }

  show() {
    super.show()
  }

  move(x, y) {
    super.move(x, y)
  }
}

class WhiteQueen extends Piece {
  constructor(x, y) {
    super(x, y, whitePieces[4], [], 'white')
    this.mov = []
    for (let i = 1; i <= 7; i++) {
      this.mov.push(createVector(i, i))
      this.mov.push(createVector(i, -i))
      this.mov.push(createVector(-i, i))
      this.mov.push(createVector(-i, -i))
      this.mov.push(createVector(0, i))
      this.mov.push(createVector(0, -i))
      this.mov.push(createVector(i, 0))
      this.mov.push(createVector(-i, 0))
    }
  }

  show() {
    super.show()
  }

  move(x, y) {
    super.move(x, y)
  }
}

class WhiteKing extends Piece {
  constructor(x, y) {
    super(x, y, whitePieces[5], [
      createVector(-1, -1),
      createVector(0, -1),
      createVector(1, -1),

      createVector(-1, 0),
      createVector(1, 0),

      createVector(-1, 1),
      createVector(0, 1),
      createVector(1, 1)
    ], 'white')
  }

  show() {
    super.show()
  }

  move(x, y) {
    super.move(x, y)
  }
}

class BlackPawn extends Piece {
  constructor(x, y) {
    super(x, y, blackPieces[0], [
      createVector(0, 1),
      createVector(0, 2)
    ], 'black')
    this.firstMove = true
  }

  show() {
    super.show()
  }

  move(x, y) {
    super.move(x, y)
  }
}

class BlackRook extends Piece {
  constructor(x, y) {
    super(x, y, blackPieces[1], [], 'black')
    this.mov = []
    for (let i = 1; i <= 7; i++) {
      this.mov.push(createVector(0, i))
      this.mov.push(createVector(0, -i))
      this.mov.push(createVector(i, 0))
      this.mov.push(createVector(-i, 0))
    }
  }

  show() {
    super.show()
  }

  move(x, y) {
    super.move(x, y)
  }
}

class BlackKnight extends Piece {
  constructor(x, y) {
    super(x, y, blackPieces[2], [
      createVector(1, -2),
      createVector(2, -1),
      createVector(2, 1),
      createVector(1, 2),
      createVector(-1, 2),
      createVector(-2, 1),
      createVector(-2, -1),
      createVector(-1, -2)
    ], 'black')
  }

  show() {
    super.show()
  }

  move(x, y) {
    super.move(x, y)
  }
}

class BlackBishop extends Piece {
  constructor(x, y) {
    super(x, y, blackPieces[3], [], 'black')
    this.mov = []
    for (let i = 1; i <= 7; i++) {
      this.mov.push(createVector(i, i))
      this.mov.push(createVector(i, -i))
      this.mov.push(createVector(-i, i))
      this.mov.push(createVector(-i, -i))
    }
  }

  show() {
    super.show()
  }

  move(x, y) {
    super.move(x, y)
  }
}

class BlackQueen extends Piece {
  constructor(x, y) {
    super(x, y, blackPieces[4], [], 'black')
    this.mov = []
    for (let i = 1; i <= 7; i++) {
      this.mov.push(createVector(i, i))
      this.mov.push(createVector(i, -i))
      this.mov.push(createVector(-i, i))
      this.mov.push(createVector(-i, -i))
      this.mov.push(createVector(0, i))
      this.mov.push(createVector(0, -i))
      this.mov.push(createVector(i, 0))
      this.mov.push(createVector(-i, 0))
    }
  }

  show() {
    super.show()
  }

  move(x, y) {
    super.move(x, y)
  }
}

class BlackKing extends Piece {
  constructor(x, y) {
    super(x, y, blackPieces[5], [
      createVector(-1, -1),
      createVector(0, -1),
      createVector(1, -1),

      createVector(-1, 0),
      createVector(1, 0),

      createVector(-1, 1),
      createVector(0, 1),
      createVector(1, 1)
    ], 'black')
  }

  show() {
    super.show()
  }

  move(x, y) {
    super.move(x, y)
  }
}
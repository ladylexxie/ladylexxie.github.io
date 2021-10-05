class Game {
  constructor() {
    this.board = new Board()
    this.whitePieces = []
    this.blackPieces = []
    this.turn = 1
    this.placePieces()
  }

  placePieces() {
    for (let i = 0; i < 8; i++) {
      this.whitePieces.push(new WhitePawn(i, 6))
      this.blackPieces.push(new BlackPawn(i, 1))
    }
    this.whitePieces.push(new WhiteRook(0, 7))
    this.blackPieces.push(new BlackRook(0, 0))
    this.whitePieces.push(new WhiteKnight(1, 7))
    this.blackPieces.push(new BlackKnight(1, 0))
    this.whitePieces.push(new WhiteBishop(2, 7))
    this.blackPieces.push(new BlackBishop(2, 0))
    this.whitePieces.push(new WhiteQueen(3, 7))
    this.blackPieces.push(new BlackQueen(3, 0))
    this.whitePieces.push(new WhiteKing(4, 7))
    this.blackPieces.push(new BlackKing(4, 0))
    this.whitePieces.push(new WhiteBishop(5, 7))
    this.blackPieces.push(new BlackBishop(5, 0))
    this.whitePieces.push(new WhiteKnight(6, 7))
    this.blackPieces.push(new BlackKnight(6, 0))
    this.whitePieces.push(new WhiteRook(7, 7))
    this.blackPieces.push(new BlackRook(7, 0))
  }

  show() {
    this.board.show()
    this.showTurn()
    this.whitePieces.forEach(piece => {
      piece.show()
    })
    this.blackPieces.forEach(piece => {
      piece.show()
    })
  }

  resetGame(){
    this.whitePieces = []
    this.blackPieces = []
    this.turn = 1
    this.placePieces()
  }

  showTurn(){
    textSize(30)
    textAlign(CENTER, CENTER)
    textStyle(BOLD)
    text('Turn number: ' + this.turn, - transformPosX/2, 30)
    text(
      this.turn % 2 == 0 ? 'Turn: Black' : 'Turn: White',
      - transformPosX/2,
      60
    )
  }
}
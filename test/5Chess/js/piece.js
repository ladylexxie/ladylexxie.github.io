class Piece {
  constructor(x, y, img, mov, color) {
    this.pos = createVector(x, y)
    this.img = img
    this.selected = false
    this.mov = mov
    this.color = color
  }

  show() {
    push()
    image(
      this.img,
      this.pos.x * 100 + (100 - PIECE_WIDTH) / 2,
      this.pos.y * 100 + (100 - PIECE_HEIGHT) / 2,
      PIECE_WIDTH,
      PIECE_HEIGHT
    )
    pop()

    if (this.selected) {
      this.mov.forEach(vector => {
        let x = this.pos.x + vector.x
        let y = this.pos.y + vector.y
        if (lu.between(x, 0, 7, true) && lu.between(y, 0, 7, true)) {
          let piece = findPiece(x, y)
          if (piece == undefined) {
            push()
            noStroke()
            fill(255, 0, 0, 100)
            ellipse(
              x * 100 + 50,
              y * 100 + 50,
              75
            )
            pop()
          }
        }
      })
    }
  }

  move(x, y) {
    for (let i = 0; i < this.mov.length; i++) {
      let v = this.mov[i]
      if (v.x == x - this.pos.x && v.y == y - this.pos.y) {

        if(this.color == 'black'){
          for(let i = 0; i < game.whitePieces.length; i++){
            let enemy = game.whitePieces[i].pos
            if(enemy.x == x && enemy.y == y){
              game.whitePieces.splice(i, 1)
              break
            }
          }
        }

        if(this.color == 'white'){
          for(let i = 0; i < game.blackPieces.length; i++){
            let enemy = game.blackPieces[i].pos
            if(enemy.x == x && enemy.y == y){
              game.blackPieces.splice(i, 1)
              break
            }
          }
        }

        if (this.firstMove) {
          this.firstMove = false
          this.mov.pop()
        }

        this.pos.x = x
        this.pos.y = y
        game.turn++
      }
    }
  }
}
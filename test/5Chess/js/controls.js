let holding = false
let selected
let faded = false

function mousePressed() {
  if (!holding) {
    let x = floor((mouseX - transformPosX) / 100)
    let y = floor((mouseY - transformPosY) / 100)

    if (lu.between(x, 0, 7, true) && lu.between(y, 0, 7, true)) {
      selected = findPiece(x, y)
      if (selected) {
        holding = true
      }
    }
  }
}

function mouseReleased() {
  if (selected && holding) {
    let x = floor((mouseX - transformPosX) / 100)
    let y = floor((mouseY - transformPosY) / 100)

    selected.move(x, y)
  }
  holding = false
  selected = undefined
  redraw()
}

function mouseMoved() {
  deselectPieces()
  let x = floor((mouseX - transformPosX) / 100)
  let y = floor((mouseY - transformPosY) / 100)

  if (lu.between(x, 0, 7, true) && lu.between(y, 0, 7, true)) {
    let piece = findPiece(x, y)
    if (piece) {
      piece.selected = true
    }
  }
  redraw()
}

function findPiece(x, y) {
  if (game.turn % 2 == 0) {
    for (let i = 0; i < game.blackPieces.length; i++) {
      let piece = game.blackPieces[i]
      if (piece.pos.x == x && piece.pos.y == y) {
        return piece
      }
    }
  } else {
    for (let i = 0; i < game.whitePieces.length; i++) {
      let piece = game.whitePieces[i]
      if (piece.pos.x == x && piece.pos.y == y) {
        return piece
      }
    }
  }



}

function deselectPieces() {
  if (game) {
    for (let i = 0; i < game.whitePieces.length; i++) {
      game.whitePieces[i].selected = false

    }

    for (let i = 0; i < game.blackPieces.length; i++) {
      game.blackPieces[i].selected = false
    }
  }
}

function keyPressed() {
  if (key == ' ') {
    reset()
  }
}

async function reset() {
  await fadeIn('Game is restarting')
  game.resetGame()
  await fadeOut('Game has been\nrestarted')
}

async function fadeIn(txt) {
  for (let i = 0; i < 255; i += 2) {
    await lu.sleep(10)
    fadeOverlay.clear()
    fadeOverlay.fill(100, i)
    fadeOverlay.rect(0, 0, fadeOverlay.width, fadeOverlay.height)
    fadeOverlay.fill(0)
    fadeOverlay.text(txt, fadeOverlay.width / 2, fadeOverlay.height / 2)
    redraw()
  }
}

async function fadeOut(txt) {
  for (let i = 255; i > 0; i -= 2) {
    await lu.sleep(10)
    fadeOverlay.clear()
    fadeOverlay.fill(100, i)
    fadeOverlay.rect(0, 0, fadeOverlay.width, fadeOverlay.height)
    fadeOverlay.fill(0)
    fadeOverlay.text(txt, fadeOverlay.width / 2, fadeOverlay.height / 2)
    redraw()
  }
  fadeOverlay.clear()
  redraw()
}
let img, game, fadeOverlay
let whitePieces = []
let blackPieces = []

let transformPosX
let transformPosY

const PIECE_WIDTH = 50
const PIECE_HEIGHT = 84

function preload() {
  img = loadImage('./img/pieces.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight, P2D)
  transformPosX = width / 2 - 200
  transformPosY = height / 2 - 400

  background(51)

  editImage()
  noLoop()

  game = new Game()
}

function draw(){
  background(51)
  push()
  translate(transformPosX, transformPosY)
  game.show()
  pop()
  image(fadeOverlay, 0, 0)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function editImage() {
  let w = floor(img.width / 6)
  let h = floor(img.height / 2)

  img.loadPixels()

  for (let p = 0; p < 6; p++) {
    let piece = createGraphics(w, h)
    piece.loadPixels()
    for (let j = 0; j < h; j++) {
      for (let i = 0; i < w; i++) {
        let index1 = (i + j * piece.width) * 4
        let index2 = (i + piece.width * p + j * img.width) * 4

        piece.pixels[index1] = img.pixels[index2]
        piece.pixels[index1 + 1] = img.pixels[index2 + 1]
        piece.pixels[index1 + 2] = img.pixels[index2 + 2]
        piece.pixels[index1 + 3] = img.pixels[index2 + 3]
      }
    }
    piece.updatePixels()
    whitePieces.push(piece)
  }

  for (let p = 0; p < 6; p++) {
    let piece = createGraphics(w, h)
    piece.loadPixels()

    for (let j = 0; j < h; j++) {
      for (let i = 0; i < w; i++) {
        let index1 = (i + j * w) * 4
        let index2 = (i + w * p + (j + h) * img.width) * 4

        piece.pixels[index1] = img.pixels[index2]
        piece.pixels[index1 + 1] = img.pixels[index2 + 1]
        piece.pixels[index1 + 2] = img.pixels[index2 + 2]
        piece.pixels[index1 + 3] = img.pixels[index2 + 3]
      }
    }

    image(piece, w * p, 0)
    piece.updatePixels()
    blackPieces.unshift(piece)
  }

  fadeOverlay = createGraphics(windowWidth, windowHeight)
  fadeOverlay.textAlign(CENTER, CENTER)
  fadeOverlay.textSize(100)
  fadeOverlay.textStyle(BOLD)
}
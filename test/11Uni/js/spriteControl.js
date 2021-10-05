class SpriteController {
  constructor() {
    this.sprites = []
  }

  loadSprite(path, name) {
    this.sprites[name] = loadImage(path)
  }

  createSprite(name, posX, posY, tileWidth, tileHeight) {
    let finalImage = createGraphics(tileWidth * 2, tileHeight * 2)

    finalImage.image(
      this.sprites[name],
      0,
      0,
      tileWidth * 2,
      tileHeight * 2,
      posX,
      posY,
      tileWidth,
      tileHeight
    )

    return finalImage
  }
}
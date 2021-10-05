class Ground {
  constructor(layer, y) {
    this.y = y;
    this.color = color(139, 69, 19);

    this.visible = true;

    layer.children.push(this);
  }

  Draw() {
    if(this.visible){
      noStroke();
      fill(this.color);
  
      rect(0, this.y, width, height - this.y)
    }
  }
}

class Background {
  constructor(layer) {
    this.color = color(51)

    this.visible = true;

    layer.children.push(this);
  }

  Draw() {
    if (this.visible) {
      background(this.color)
    }
  }
}
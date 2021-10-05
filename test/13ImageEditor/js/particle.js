class Particle {
  constructor() {
    this.x = random(width)
    this.y = 0
    this.speed = 0
    this.velocity = random(0.7)
    this.size = random(0.1, 2)
  }

  update() {
    this.speed = grid[floor(this.y / detail)][floor(this.x / detail)];
    let movement = (2.5 - this.speed) + this.velocity;
    this.y += movement;
    if (this.y >= height) {
      this.y = 0;
      this.x = random(width);
    }
  }

  draw() {
    push()
    fill(255, this.speed * 0.3 * 255)
    
    noStroke()  
    ellipse(this.x, this.y, this.size)
    pop()
  }
}
class Particle {
  constructor() {
    this.pos = createVector(WIDTH / 2, HEIGHT / 2)
    this.rays = []
    for (let a = 0; a < FOV; a += 0.25) {
      this.rays.push(new Ray(this.pos, radians(a + angle)))
    }
  }

  updateRays(){
    this.rays = []
    for (let a = 0; a < FOV; a += 0.25) {
      this.rays.push(new Ray(this.pos, radians(a + angle)))
    }
  }

  update(x, y) {
    this.pos.set(
      lu.clamp(x, 21, WIDTH - 22),
      lu.clamp(y, 21, HEIGHT - 22)
    )
  }

  look(boundaries) {
    fill(51)
    noStroke()
    beginShape()
    vertex(this.pos.x, this.pos.y)
    for (let i = 0; i < this.rays.length; i++) {
      const ray = this.rays[i]
      let closest = null
      let record = Infinity;

      for (let boundary of boundaries) {
        const pt = ray.cast(boundary)
        if (pt) {
          const d = p5.Vector.dist(this.pos, pt);
          if (d < record) {
            record = d
            closest = pt
          }
        }
      }
      
      if (closest) {
        ray.pt = closest
        // vertex(closest.x, closest.y)
        strokeWeight(1)
        stroke(255)
        line(this.pos.x, this.pos.y, closest.x, closest.y)
      }
    }
    endShape(CLOSE)
    fill(255, 0, 0)
    stroke(0)
    ellipse(this.pos.x, this.pos.y, 20)
  }
}
class ParticleSystem {
  constructor(position) {
    this.origin = position.copy()
    this.particleList = []
  }

  addParticle() {
    this.particleList.push(new HeartParticle(this.origin))
  }

  run() {
    for (let i = this.particleList.length; i > 0; i--) {
      let particle = this.particleList[i - 1]
      particle.run()
      if (particle.isDead()) {
        this.particleList.splice(i - 1, 1)
      }
    }
  }

  isEmpty() {
    return this.particleList.length == 0 ? true : false
  }

  createParticles() {
    for (let i = 0; i < 20; i++) {
      this.addParticle()
    }
  }
}

class Physics {
  constructor() {
    this.gravity = createVector(0, 0.1)
    this.sprite = createSprite()
  }

  Update() {
    //Player
    this.ApplyForce(player, p5.Vector.mult(this.gravity, player.mass))
    player.vel.add(player.acc);
    player.pos.add(player.vel);
    if (player.pos.y > ground.y - 15) {
      player.pos.y = ground.y - player.w / 2
    }
    player.acc.mult(0)

    //Objects
    for (let i = 0; i < objLayer.children.length; i++) {
      let obj = objLayer.children[i];
      //TO-DO
    }
  }

  ApplyForce(obj, force) {
    let f = p5.Vector.div(force, obj.mass);
    obj.acc.add(f)
  }
}
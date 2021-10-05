class Player {
  constructor(layer, state) {
    //characteristics
    this.w = 30;
    this.speed = 1;
    this.color = color(255, 0, 0);
    this.visible = true;
    this.updateCheck = true;
    this.sprite = createSprite(0, 0, this.w, this.w);
    this.sprite.setCollider('circle', 0, 0, 64)

    //physics
    this.mass = 3;
    this.pos = createVector(width / 2, ground.y - this.w / 2 - 100);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);

    //states
    this.states = [];
    this.AddState(state);

    layer.children.push(this);
  }

  Draw() {
    if (this.visible) {
      push();
      translate(this.pos.x, this.pos.y);
      // drawSprite(this.sprite);
      ellipse(0, 0, this.w)
      pop();
    }
  }

  Update() {
    if (this.updateCheck) {
      for (let i = 0; i < this.states.length; i++) {
        this[this.states[i]]();
      }
    }
  }

  AddState(state) {
    for (let i = 0; i < this.states.length; i++) {
      if (this.states[i] === state) {
        return;
      }
    }
    this.states.push(state);
  }

  RemoveState(state) {
    for (let i = 0; i < this.states.length; i++) {
      if (this.states[i] === state) {
        this.states.splice(i, 1);
        break;
      }
    }
  }

  JumpState() {
    this.acc.add(0, -this.speed);
  }

  MoveLeftState() {
    this.x -= this.speed;
  }

  MoveRightState() {
    this.x += this.speed;
  }

  IdleState() {
    this.states = [];
  }
}
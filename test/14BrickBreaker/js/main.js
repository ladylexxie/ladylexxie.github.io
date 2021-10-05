let gravity
const balls = []

function setup(){
  createCanvas(windowWidth, windowHeight)
  gravity = createVector(0, 5)
  balls.push(new Ball(width/2, 20))
}

function draw(){
  background(0)
  balls.forEach((ball, i) => {
    ball.update()
    ball.render()
    if(ball.pos.y > height + 15){
      ball.pos.y = -15
    }
  })
}
let paddle
let ball
let bricks = []

let paused = false

function setup(){
  	createCanvas(windowWidth, windowHeight)
  	angleMode(DEGREES)
  	textSize(72)
  	paddle = new Paddle()
  	ball = new Ball()
  	for(let i = 0; i < 25; i++){
  		bricks.push(new Brick(i * 75 + 22, 200))
  	}
}

function draw(){
  	background(51)
  	paddle.update()
  	for(let i = 0; i < bricks.length; i++){
  		if(bricks[i].hit){
  			bricks.splice(i, 1)
  		}
  	}
  	for(let i = 0; i < bricks.length; i++){
  		bricks[i].update()
  	}
  	ball.update()
  	if(bricks.length == 0){
  		text("Winner!", width/2 - textWidth("Winner!")/2, height / 2)
  	}
}

function keyPressed(){
	if(key == 'a' || key == 'A'){
		paddle.moveLeft = true
	}
	if(key == 'd' || key == 'D'){
		paddle.moveRight = true
	}
	if(key == ' '){
		if (paused) {
			paused = false
			loop()
		} else {
			paused = true
			noLoop()
		}
	}
}

function keyReleased(){
	paddle.moveRight = false
	paddle.moveLeft = false
}

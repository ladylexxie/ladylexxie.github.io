function Ball(){
	this.position = createVector(width/2, height-height/3)
	this.radius = 15
	this.speed = 10
	this.direction = createVector(0,1)
	this.velocity = createVector(1,1).mult(this.speed)

	this.show = function(){
		fill(255)
		noStroke()
		ellipse(this.position.x, this.position.y, this.radius * 2, this.radius * 2)
	}

	this.move = function(){
		this.position.x += this.direction.x * this.velocity.x
		this.position.y += this.direction.y * this.velocity.y
	}

	this.reset = function(){
		this.position = createVector(width/2, height-height/3)
		this.direction = createVector(0,1)
		this.velocity = createVector(1,1).mult(this.speed)
		this.firstHit = false
		paddle.reset()
		paused = true
	}

	this.checkEdges = function(){
		//left edge
		if(this.position.x < this.radius){
			this.direction.x *= -1
			this.position.x = this.radius
		}
		//right edge
		else if(this.position.x > width-this.radius){
			this.direction.x *= -1
			this.position.x = width-this.radius
		}
		//top
		else if(this.position.y < this.radius){
			this.direction.y *= -1
			this.position.y = this.radius
		}
		//bottom
		else if(this.position.y > height-this.radius){
			this.reset()
		}
	}

	this.hitPaddle = function(){
		if(collideRectCircle(paddle.position.x, paddle.position.y, paddle.width, paddle.height, this.position.x, this.position.y, this.radius * 2)){
			this.direction.y *= -1
			this.direction.x = map(this.position.x - paddle.position.x, 0, paddle.width, -1, 1)
			this.position.y = paddle.position.y - this.radius
		}
	}

	this.update = function(){
		this.checkEdges()
		this.move()
		this.hitPaddle()
		this.show()
	}
}

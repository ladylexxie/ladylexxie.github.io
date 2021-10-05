function Brick(x, y){
	this.position = createVector(x, y)
	this.width = 75
	this.height = 20
	this.hit = false

	this.show = function(){
		fill(200, 0, 0)
		rect(this.position.x, this.position.y, this.width, this.height, 5)
	}

	this.ballHit = function(){
		this.hit = collideRectCircle(this.position.x, this.position.y, this.width, this.height, ball.position.x, ball.position.y, ball.radius * 2)
		if(this.hit){
			ball.direction.y *= -1
		}
	}

	this.update = function(){
		this.ballHit()
		this.show()
	}
}

function Player(x, y, r, c) {
	this.position = createVector(x, y)
	this.radius = r
	this.color = c
	this.velocity = createVector(0, 0)
	this.score = 0

	this.update = function() {
		let newvel = createVector(mouseX - width / 2, mouseY - height / 2)
		newvel.setMag(5)
		this.velocity.lerp(newvel, 0.5)
		this.position.add(this.velocity)
	}

	this.eats = function(other) {
		let d = p5.Vector.dist(this.position, other.position)
		if (d < this.radius + other.radius && this.score < maxScore) {
			let sum = PI * this.radius * this.radius + PI * other.radius * other.radius
			this.radius = sqrt(sum / PI)
			this.score += 1
			return true
		} else {
			return false
		}
	}

  //TODO keep player in play area
  // this.outside = function(bg) {
  //   if(this.radius > bg.position.x){
  //     this.position.x = bg.position.x - this.radius
  //   }
  // }

	this.show = function() {
		push()
		noStroke()
		fill(this.color.r, this.color.g, this.color.b)
		ellipse(this.position.x, this.position.y, this.radius * 2, this.radius * 2)
		// fill(0)
		// let squareSize = pow(pow(this.radius * 2, 2) / 2, 1 / 2)
		// textSize(45)
		// text(this.score, this.position.x - squareSize / 2, this.position.y - squareSize / 2, squareSize, squareSize)
		pop()
	}
}

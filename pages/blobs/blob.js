function Blob(x, y, r, c) {
	this.position = createVector(x, y)
	this.radius = r
  this.color = c
	this.velocity = createVector(0, 0)

	this.update = function() {
		var newvel = createVector(mouseX - width / 2, mouseY - height / 2)
		newvel.setMag(5)
		this.velocity.lerp(newvel, 0.5)
		this.position.add(this.velocity)
	}

	this.show = function() {
    push()
    noStroke()
		fill(this.color.r, this.color.g, this.color.b)
		ellipse(this.position.x, this.position.y, this.radius * 2, this.radius * 2)
    pop()
  }
}

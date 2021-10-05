function Paddle(){
    this.width = 150
    this.height = 20
    this.position = createVector(width / 2 - this.width / 2, height - 50)
    this.speed = 10
    this.moveLeft = false
    this.moveRight = false

    this.move = function(){
      if(this.moveLeft === true){
        this.position.x -= this.speed
      }
      else if(this.moveRight === true){
        this.position.x += this.speed
      }
    }

    this.checkEdges = function(){
      //left
      if(this.position.x < 0){
        this.position.x = 0
      }
      //right
      else if(this.position.x > width - this.width){
        this.position.x = width - this.width
      }
    }

    this.reset = function(){
      this.speed = 10
      this.width = 150
      this.position = createVector(width / 2 - this.width / 2, height - 50)
    }

    this.show = function(){
      fill(255)
      noStroke()
      rect(this.position.x, this.position.y, this.width, this.height, 7)
    }

    this.update = function(){
      this.checkEdges()
      this.move()
      this.show()
    }
}

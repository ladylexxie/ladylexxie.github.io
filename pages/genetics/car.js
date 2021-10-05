function Car(x, y, w, h) {
    this.width = w;
    this.length = h;
    this.position = createVector(x, y);
    this.velocity = createVector();
    this.acceleration = createVector();
    this.dna = new DNA();
    this.fitness = 0;
    this.completed = false;
    this.removed = false;
    this.disqualified = false;
    this.step = 0;
    this.targetId = 0;
    this.color = 'blue';
    this.finished = false;

    this.removeFromList = function() {
        if (!this.removed) {
            carsLeft--;

            pieChart.config.data.datasets[0].data[0] = carsLeft;
            pieChart.config.data.datasets[0].data[1] = populationSize - carsLeft;
            pieChart.update();

            this.removed = true;
            this.step = step;
        }
    }

    this.crossover = function(other) {
        var child = new Car(x, y, w, h);
        var genesLength = this.dna.getLength();
        var midPoint = floor(random(genesLength));
        for (var i = 0; i < genesLength; i++) {
            if (i > midPoint) {
                child.dna.genes[i] = this.dna.genes[i]
            } else {
                child.dna.genes[i] = other.dna.genes[i]
            }
        }
        child.dna.mutation();
        return child;
    }

    this.calcFitness = function() {
        var distance = dist(this.position.x, this.position.y, targets[this.targetId].position.x, targets[this.targetId].position.y);
        this.fitness = 1 / distance;
        if (this.fitness > 0) {
            this.fitness = pow(this.fitness, 2);
        }
        if (this.completed) {
            this.fitness *= 1 + (10 / this.step);
        }
    }

    this.applyForce = function(force) {
        this.acceleration.add(force);
    }

    this.changeTarget = function() {
        var colors = ['blue', 'red', 'yellow', 'black'];
        if (this.completed) {
            var targetId = this.targetId + 1;
            this.color = colors[targetId];
            if (targetId < targets.length) {
                this.targetId = targetId;
                this.completed = false;
            } else {
                this.finished = true;
                this.completed = true;
                this.removeFromList();
                noLoop();
            }
        }
    }

    this.move = function() {
        if (targets[this.targetId].detect(this.position.x, this.position.y)) {
            this.completed = true;
            this.changeTarget();
        }
        if (!this.disqualified && collision.detect(this.position.x, this.position.y)) {
            this.disqualified = true;
            this.removeFromList();
        }
        if (!this.disqualified) {
            if (this.position.x > width || this.position.x < 0 || this.position.y > height || this.position.y < 0) {
                this.disqualified = true;
                this.removeFromList();
            }
        }
        this.applyForce(this.dna.genes[step]);
        if (!this.finish && !this.disqualified) {
            this.velocity.add(this.acceleration);
            this.position.add(this.velocity);
            this.acceleration.mult(0);
        }
        this.design();
    }
    
    this.design = function() {
        push();
        noStroke();
        translate(this.position.x, this.position.y);
        rotate(this.velocity.heading());
        rectMode(CENTER);
        fill(this.color);
        rect(0, 0, this.length, this.width);
        pop();
    }
}
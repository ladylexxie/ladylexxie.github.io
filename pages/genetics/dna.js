function DNA() {
    this.genes = [];
    for (var i = 0; i < lifetime; i++) {
        this.genes[i] = p5.Vector.random2D();
        this.genes[i].setMag(maxForce);
    }
    this.getLength = function() {
        return this.genes.length;
    }
    this.mutation = function() {
        for (var i = 0; i < this.getLength(); i++) {
            if (random(1) < mutationRate) {
                this.genes[i] = p5.Vector.random2D();
                this.genes[i].setMag(maxForce);
            }
        }
    }
}
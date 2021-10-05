function Population(x, y, w, h) {
    this.cars = [];
    this.size = populationSize;
    this.matingPool = [];
    for (var i = 0; i < this.size; i++) {
        this.cars[i] = new Car(x, y, w, h);
    }
    this.evaluate = function() {
        pieChart = new Chart(ctx3, {
        type: 'pie',
        data: {
            labels: ['Alive', 'Dead'],
            datasets: [{
                data: [carsLeft, populationSize - carsLeft],
                borderColor: ['rgba(254, 203, 47, 1)', 'rgba(66, 66, 66, 1)'],
                hoverBorderColor: ['rgba(219, 175, 41, 1)', 'rgba(50, 50, 50, 1)'],
                backgroundColor: ['rgba(254, 203, 47, 0.2)', 'rgba(66, 66, 66, 0.2)'],
                hoverBackgroundColor: ['rgba(219, 175, 41, 0.2)', 'rgba(50, 50, 50, 0.2)']
            }]
            },
            options: {
                animation: false,
                responsive: false,
                maintainAspectRatio: false
            }
        });

        var maxFitness = 0;
        for (var i = 0; i < this.size; i++) {
            this.cars[i].calcFitness();
            if (this.cars[i].fitness > maxFitness) {
                maxFitness = this.cars[i].fitness;
            }
        }
        var sumFitness = 0;
        for (var i = 0; i < this.size; i++) {
            sumFitness += this.cars[i].fitness;
        }
        chart.config.data.labels.push(generation);
        chart.config.data.datasets[0].data.push(sumFitness / this.size);
        if (generation >= 11) {
            for (var i = 0; i < chart.config.data.labels.length - 1; i++) {
                chart.config.data.labels[i] = chart.config.data.labels[i + 1];
                chart.config.data.datasets[0].data[i] = chart.config.data.datasets[0].data[i + 1];
            }
            chart.config.data.labels.pop();
            chart.config.data.datasets[0].data.pop();
        }
        chart.update();
        chart2.config.data.labels.push(generation);
        chart2.config.data.datasets[0].data.push(maxFitness);
        if (generation >= 11) {
            for (var i = 0; i < chart2.config.data.labels.length - 1; i++) {
                chart2.config.data.labels[i] = chart2.config.data.labels[i + 1];
                chart2.config.data.datasets[0].data[i] = chart2.config.data.datasets[0].data[i + 1];
            }
            chart2.config.data.labels.pop();
            chart2.config.data.datasets[0].data.pop();
        }
        chart2.update();
        for (var i = 0; i < this.size; i++) {
            this.cars[i].fitness /= maxFitness;
        }
        this.matingPool = [];
        for (var i = 0; i < this.size; i++) {
            var n = this.cars[i].fitness * 100;
            for (var j = 0; j < n; j++) {
                this.matingPool.push(this.cars[i]);
            }
        }
        this.selection();
        generation++;
    }
    this.selection = function() {
        this.cars = [];
        for (var i = 0; i < population.size; i++) {
            var parentA = random(this.matingPool);
            var parentB = random(this.matingPool);
            var child = parentA.crossover(parentB);
            this.cars.push(child);
        }
    }
    this.run = function() {
        for (var i = 0; i < population.size; i++) {
            this.cars[i].move();
        }
    }
}
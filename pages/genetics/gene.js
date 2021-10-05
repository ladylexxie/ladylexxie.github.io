var population, track, chart, chart2, pieChart, ctx, ctx2, ctx3;
var targets = [];
var step = 0;
var lifetime = 1000;
var generation = 1;
var maxForce = 0.5;
var populationSize = 200;
var carsLeft = populationSize;
var walls = [];
var wall;
var collision;
var mutationRate = 0.01;
var geneCanvas;
var paused = false;

function mousePressed() {
    if (paused == true) {
        loop();
        paused = false;
    } else {
        noLoop();
        paused = true;
    }
}

function setup() {
    geneCanvas = createCanvas(w, h);
    geneCanvas.parent('geneCanvas');
    population = new Population(40, height / 2, 5, 10);
    targets.push(new Target(w * 0.95, height / 2, 20, 20));
    for (var i = 0; i < wallParams.length; i++) {
        walls.push(new Wall(wallParams[i]));
    }
    collision = new Collision();
    ctx = document.getElementById("chartCanvas").getContext('2d');
    ctx2 = document.getElementById("chartCanvas2").getContext('2d');
    ctx3 = document.getElementById("chartCanvas3").getContext('2d');
    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Average Fitness',
                data: [],
                backgroundColor: ['rgba(254, 203, 47, 0.1)'],
                borderColor: ['rgba(254, 203, 47, 1)', ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            scales: {
                xAxes: [{
                    gridLines:{
                        color: 'rgb(127, 127, 127)'
                    }
                }],
                yAxes: [{
                    gridLines:{
                        color: 'rgb(127, 127, 127)'
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    chart2 = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Maximum Fitness',
                data: [],
                backgroundColor: ['rgba(254, 203, 47, 0.1)'],
                borderColor: ['rgba(254, 203, 47, 1)', ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            scales: {
                xAxes: [{
                    gridLines:{
                        color: 'rgb(127, 127, 127)'
                    }
                }],
                yAxes: [{
                    gridLines:{
                        color: 'rgb(127, 127, 127)'
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
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
}

function draw() {
    background(27, 27, 27);
    targets.forEach(function(target) {
        target.show();
    });
    walls.forEach(function(wall) {
        wall.show();
    });
    population.run();
    step++;
    if (step == lifetime || carsLeft <= 0) {
        population.evaluate();
        step = 0;
        carsLeft = populationSize;
    }
}

function Wall(params) {
    this.width = params.w || 10;
    this.height = params.h || 10;
    this.x = params.x || 0;
    this.y = params.y || 0;
    this.show = function() {
        fill(27, 27, 27);
        strokeWeight(3);
        stroke(150, 135, 135);
        ellipse(this.x, this.y, this.width, this.height);
    }
}

function Collision() {
    this.detect = function(posX, posY) {
        for (var i = 0; i < walls.length; i++) {
            if ((pow((posY - walls[i].y), 2) / pow(walls[i].height / 2, 2) + pow((posX - walls[i].x), 2) / pow(walls[i].width / 2, 2)) <= 1) {
                return true;
            }
        }
    }
}

function Target(x, y, w, h) {
    this.position = createVector(x, y);
    this.width = w;
    this.height = h;
    this.show = function() {
        fill(255, 255, 255);
        noStroke();
        ellipse(this.position.x, this.position.y, this.width, this.height);
    }
    this.detect = function(posX, posY) {
        if ((pow((posY - this.position.y), 2) / pow(this.height / 2, 2) + pow((posX - this.position.x), 2) / pow(this.width / 2, 2)) <= 1) {
            return true;
        }
    }
}

var objLayer, bckLayer;
var ground, player
var physics

function setup(){
  createCanvas(windowWidth, windowHeight);

  objLayer = new ObjectLayer();
  bckLayer = new BackgroundLayer();

  physics = new Physics();

  new Background(bckLayer)
  ground = new Ground(bckLayer, height * 0.75);
  
  player = new Player(objLayer, "IdleState");

  // noLoop()
}

function draw(){
  StaticRender();
  FixedUpdate();
  Update();
  LateUpdate();
  Render();
}

function FixedUpdate(){
  physics.Update()
}

function Update(){
  KeyPressed();
  objLayer.children.forEach(obj => {
    obj.Update()
  })
}

function LateUpdate(){
  
}

function StaticRender(){
  bckLayer.children.forEach(obj => {
    obj.Draw()
  })
}

function Render(){
  objLayer.children.forEach(obj => {
    obj.Draw()
  })
}
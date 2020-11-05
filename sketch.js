const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world,engine,ball,ground;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic:true
  }
  ground = Bodies.rectangle(400,390,800,10,options);
  World.add(world,ground);
  var option1 = {
    restitution:1
  }

   ball = Bodies.circle(200,100,20,option1);
   World.add(world,ball);
}

function draw() {
  background("blue"); 
  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,10);
  ellipse(ball.position.x,ball.position.y,40,40);
}
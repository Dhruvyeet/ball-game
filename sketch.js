const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world,body
var ball
var ground





function setup() {
  createCanvas(400,400);
  engine=Engine.create()
  world = engine.world
  ball=Bodies.circle(200,50,30)
  World.add(world,ball)
  
  






}

function draw() {
  background("black");  
  
  Engine.update(engine)
  ellipse(ball.position.x,ball.position.y,30,30)
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  drawSprites();
}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
  createSprite(400, 200, 50, 50);
  classrectangle1 = new Rectangle(200,200,70,70);
  classcircle1 = new Circle(200,100,70,20);
  ground = new Ground(200,390,400,50);
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
    classrectangle1.display();
    classcircle1.display();
    ground.display();
  drawSprites();
}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roofObject;
function preload()
{
	
}

function setup() {
  createCanvas(1600, 700);
  

	engine = Engine.create();
  world = engine.world;
  


  //Create the Bodies Here.
    roofObject=new Roof(770,200,width/7,20);
    bob1 = new Bob(700,350,40)
    bob2 = new Bob(735,350,40)
    bob3 = new Bob(770,350,40)
    bob4 = new Bob(805,350,40)
    bob5 = new Bob(840,350,40)

    rope1=new Rope(bob1.body,roofObject.body,-80,0)
	  rope2=new Rope(bob2.body,roofObject.body,-40,0,)
	  rope3=new Rope(bob3.body,roofObject.body,0,0)
	  rope4=new Rope(bob4.body,roofObject.body,40,0)
	  rope5=new Rope(bob5.body,roofObject.body,80,0)

   	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(235);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roofObject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  
  drawSprites();
 
}
function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-30,y:-25});
  
  }
}
function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}




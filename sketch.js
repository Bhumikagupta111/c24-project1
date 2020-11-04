
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
var ground1;
var dustbin1,dustbin2,dustbin3;


function setup() {
	createCanvas(800, 700)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1=new papers(150,120,50);
	ground1=new ground(400,600,1000,20)
	dustbin1=new dustbin0(440,570,20,60);
	dustbin2=new dustbin0(540,570,20,60);
	dustbin3=new dustbin0(490,580,100,20);

	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
ground1.display();
dustbin1.display();
dustbin2.display();
dustbin3.display();


if(keyDown("up"))
{
Matter.Body.applyForce(paper1.paper,paper1.paper.position,{x:18,y:-15});
}
  drawSprites();
 
}










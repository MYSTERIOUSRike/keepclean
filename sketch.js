
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3,ground,ball,binimg;
var options={
 isStatic:false,
 restitution:0.3,
 friction:0.5,
 density:1.2 
  
}

function preload()
{
	binimg = loadImage("paper.png");

}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255,0,0)
	

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 649, width, 10 , {isStatic:true} );
	World.add(world, ground);
	//ball = Bodies.circle(200,200,20,{options});
  //World.add(world,ball);
 

	Engine.run(engine);
	box1 = new box(890,615,20,150);
	box2 = new box(1110,615,20,150);
	box3 = new boxes(1000,640,200,20);
	ball = new paper(300,640,20);
	

}


function draw() {
  rectMode(CENTER);
  background(255);
  //diplaying
  drawSprites();
  box1.display();
  box2.display();
  ball.display();
  box3.display();
  

}
function keyPressed (){
if ( keyCode === UP_ARROW){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:75,y:-83})
	

}

}




var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	bobObject1= new Bob(200,420);
	bobObject2= new Bob(300,420);
	bobObject3= new Bob(400,420);
	bobObject4= new Bob(500,420);
	bobObject5= new Bob(600,420);
	platform = new Roof(400,100,400,10);
	
	
	
	rope1= new Rope(bobObject1.body,platform.body,-160,0);
	rope2= new Rope(bobObject2.body,platform.body,-80,0)
	rope3= new Rope(bobObject3.body,platform.body,0,0);
	rope4= new Rope(bobObject4.body,platform.body,80,0);
	rope5= new Rope(bobObject5.body,platform.body,160,0);
	
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject4.display();
  bobObject3.display(); 
  bobObject5.display(); 
 platform.display();

  drawSprites();
 
}
function keyPressed(){
if (keyCode===UP_ARROW){
	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45})
}

}



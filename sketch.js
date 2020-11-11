var ground, paper1, box1, box2, box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;
	
	paper1 = new paper(200,450,40);
	paper1.debug = true


	



	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow")

	ground = Bodies.rectangle(width/2, 670, width, 10 , {isStatic:true} );
	World.add(world, ground);
	


	box1 = new Box(650,635,150,10)
	box2 = new Box(720,605,10,70)
	box3 = new Box(580,605,10,70)







	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  Engine.update(engine);

	
	box1.display();
	box2.display();
	box3.display();
	paper1.display();
	
	

  drawSprites();
 
}function keyPressed () {
if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:40,y:-40});
}

}




const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() 
{
	var canvas = createCanvas(800,700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("white");


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition=width/2-100
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);
     
	//boxLeftBody = new Box(boxPosition+20, boxY, 20,100);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);
    
	//boxBottomBody = new Box(boxPosition+100, boxY+45-20, 200,20);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxRightSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxRightSprite.shapeColor=color(255,0,0);
     
 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);

	//boxRightBody = new Box(boxPosition+200-20 , boxY, 20,100, {isStatic:true});

}


function draw() 
{
  Engine.update(engine);
  
  rectMode(CENTER);
  background(0);
 
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  //boxRightBody.display();
  //boxBottomBody.display();
  //boxLeftBody.display();
  
  keyPressed();

  drawSprites();
}

function keyPressed()
{
	if(keyDown(RIGHT_ARROW))
	{
		helicopterSprite.x += 20;
		packageBody.position.x += 20;
	}

	if(keyDown(LEFT_ARROW))
	{
		helicopterSprite.x -= 20;
		packageBody.position.x -= 20;
	}

	if(keyDown(DOWN_ARROW))
	{
		Body.setStatic(packageBody, false);
	}
}

const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine, ground, groundd;
var helicopter, helicopterIMG;
var package, packageImg,  package_options, packageBody;

function preload(){
	packageImg = loadImage("package.png");
	helicopterIMG = loadImage("helicopter.png");
}

function setup(){
	createCanvas(800,700)
    engine = Engine.create();
	world = engine.world;
    rectMode(CENTER);
	
    package_options = {
		isStatic: true, restitution : 0
	}
	package = createSprite(width/2, 80, 10, 10);
	package.addImage("pack", packageImg);
	package.scale = 0.2;
    

	var heli_options={
		isStatic: true
	}
	helicopter = createSprite(width/2, 200, 10, 10);
	helicopter.addImage("heli", helicopterIMG);
	helicopter.scale = 0.6;
	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);

	var g_options={
		isStatic: true
	}
	groundd = Bodies.rectangle(width/2, 650, width, 10 , g_options );
	World.add(world, groundd);

	 
}

function draw(){
	
  background(0);
  rectMode(CENTER);
  rect(groundd.position.x,groundd.position.y,800,20);
  Engine.update(engine);
  package.x= packageBody.position.x; 
  package.y= packageBody.position.y ;

  if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
	
  }
  drawSprites();
}
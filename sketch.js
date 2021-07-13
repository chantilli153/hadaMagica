var starImg,bgImg;
var star, starBody;
//crea la variable para el sprite del hada y fairyImg
var fairy, fairyImg;
    
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    fairyImg = loadAnimation("fairyImage1.png", "fairyImage2.png");
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	//carga aquí la animación del hada
  
}

function setup() {
	createCanvas(800, 750);

	
    fairy = createSprite(400,490);
  fairy.addAnimation("fairy",fairyImg);
  fairy.scale = 0.2;
  
  
	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);
    console.log(fairy.x);

  //escribe aquí el código para detener la estrella en la mano del hada
  if(starBody.position.y > 470 &&(fairy.x>510&&fairy.x<560)){
    Matter.Body.setStatic(starBody,true);    
    console.log(starBody.isStatic);
    star.y=470;
  }
  

  drawSprites();
  keyPressed();
}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
    }

	//escribe el código para mover al hada a la izquierda y derecha

  
  if (keyDown(RIGHT_ARROW)){
      fairy.x = fairy.x +5;
    }
  if (keyDown(LEFT_ARROW)){
      fairy.x = fairy.x -5;
    }
  
  
  
}

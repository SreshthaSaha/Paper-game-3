
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var dustbin,paperObject,ground;	
var world;
var sling;

function setup() {	
	createCanvas(1600,700)	
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	dustbin=new Dustbin(1200,500);
	paperObject=new paper(200,450,70);
	ground=new Ground(width/2,670,width,20);
	sling=new SlingShot(paperObject.body,{x:150,y:200});
  
	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);	  
}
function draw() {
  rectMode(CENTER);
  background(255);
 
  dustbin.display();
  paperObject.display();
  ground.display();
  sling.display();
}
function mouseDragged(){
    Matter.Body.setPosition(paperObject.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
	//Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:110,y:-200});
    sling.fly();
}
// function keyPressed() {
//   	if (keyCode === UP_ARROW) {		  
//     	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:110,y:-200});
    
//   	}
// }






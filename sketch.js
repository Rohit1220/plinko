const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Render = Matter.Render;
var world;
function setup() {
	createCanvas(480, 800);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	ground=new Ground(width/2,670,width,20);
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
	//Render.run(render);
}
function draw() {
  rectMode(CENTER);
  background(225);
  ground.display();
  drawSprites();
}
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
var particles = [];
var plinko = [];
var divisions = [];
var divisionheight = 300;
function draw() {
  rectMode(CENTER);
  background("black");
  ground.display();
  for (var k = 0;k <=width; k =k +80)
  {
	  divisions.push(new divisions(k,height-divisionheight/2,10,divisionheight));
  }
  for (var j = 40; j <=width ;j = j+50)
  {
	  plinkos.push(new plinko(j,75));
  }
  for (var j=15;j<=width-10;j=j+50)
  {
	  plinkos.push(new plinko(j,175));
  }
  for (var j = 0; j < divisions.length;k++)
  {
	  divisions[k].display();
  }
  if (frameCount%60===0)
  {
	  particles.push(new particle(random(width/2-10 , width/2+10),10,10));
  }
  drawSprites();
}
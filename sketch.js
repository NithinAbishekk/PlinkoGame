const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var plinkos = [];
var divisions = [];
var particles = [];
var divisionHeight = 250;


function preload(){

}
function setup() {
  createCanvas(483,620);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
 
  //create bodies here;
  ground = new Ground(247,610);

  //create division using for loop and pushing into array ;
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var p = 40; p <=width; p=p+50){
      plinkos.push(new Plinko(p,75));
  }
  for (var p = 15; p <=width-10; p=p+50){
      plinkos.push(new Plinko(p,150));
  }
  for (var p = 40; p <=width; p=p+50){
      plinkos.push(new Plinko(p,225));
  }
  for (var p = 15; p <=width -10; p=p+50){
      plinkos.push(new Plinko(p,295));
  }



  /*var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1300,
		  height: 600,
		  wireframes: false
		}
	  });
		
		Engine.run(engine);
		Render.run(render);*/

}

function draw() {
  background(0); 
  Engine.update(engine); 

  ground.display();

  if(frameCount % 60 === 0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
 }
  for (var j = 0; j < particles.length; j++) {

    particles[j].display();
  }

 

  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }

  //creating plinkos;
  for (var p = 0; p < plinkos.length; p++){
      plinkos[p].display();
  }
  for (var p = 0; p < plinkos.length; p++){
      plinkos[p].display();
  }
  for (var p = 0; p < plinkos.length; p++){
      plinkos[p].display();
  }

  

}





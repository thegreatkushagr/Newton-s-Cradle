
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint;

var bob, bob2, bob3, bob4, bob5, bob6;
var stand;
var str, str1, str2, str3, str4, str5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob = new Paper(270,350,15);
	bob2 = new Paper(300,350,15);
	bob3 = new Paper(330,350,15);
	bob4 = new Paper(360,350,15);
	bob5 = new Paper(390,350,15);
	bob6 = new Paper(420,350,15);
	str = new SlingShot(bob.body, {x: 270, y: 200});
	str1 = new SlingShot(bob2.body, {x: 300, y: 200});
	str2 = new SlingShot(bob3.body, {x: 330, y: 200});
	str3 = new SlingShot(bob4.body, {x: 360, y: 200});
	str4 = new SlingShot(bob5.body, {x: 390, y: 200});
	str5 = new SlingShot(bob6.body, {x: 420, y: 200});
	
	stand = new Dustbin(350, 200, 270, 10)

	Engine.run(engine);
  
}


function draw() {
  background(255);

  Engine.update(engine)
  
  bob.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();
  stand.display();
  str.display();
  str1.display();
  str2.display();
  str3.display();
  str4.display();
  str5.display();
  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){

	Matter.Body.applyForce(bob.body, bob.body.position, {x: -50, y: 0});
	console.log("bhens ki tat")

 }
}

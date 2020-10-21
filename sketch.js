const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground_;
var stand1,stand2;
var ball;
var slingShot;
var score = 0;

function setup() {
createCanvas(900,400);
engine = Engine.create();
world = engine.world;
Engine.run(engine);
ground_ = new ground();
stand1 = new stand(390,300,250,10);
stand2 = new stand(700,200,200,10);

//level one
block1 = new box(300,275,30,40);

block2 = new box(330,275,30,40);
block3 = new box(360,275,30,40);
block4 = new box(390,275,30,40);
block5 = new box(420,275,30,40);
block6 = new box(450,275,30,40);
block7 = new box(480,275,30,40);
//level two
block8 = new box(330,235,30,40);
block9 = new box(360,235,30,40);
block10 = new box(390,235,30,40);
block11 = new box(420,235,30,40);
block12 = new box(450,235,30,40);
//level three
block13 = new box(360,195,30,40);
block14 = new box(390,195,30,40);
block15 = new box(420,195,30,40);
//top
block16 = new box(390,155,30,40);

//set 2 for second stand
//level one
blocks1 = new box(640,175,30,40);
blocks2 = new box(670,175,30,40);
blocks3 = new box(700,175,30,40);
blocks4 = new box(730,175,30,40);
blocks5 = new box(760,175,30,40);
//level two
blocks6 = new box(670,135,30,40);
blocks7 = new box(700,135,30,40);
blocks8 = new box(730,135,30,40);
//top
blocks9 = new box(700,95,30,40);

//ball holder with slings
ball = Bodies.circle(50,200,20);
World.add(world,ball);

slingShot = new slingshot(this.ball,{x:100,y:200});

}
function draw(){
    background("black");

    text("Score" + score, 750, 40);

   block1.display();
   block2.display();
   block3.display();
   block4.display();
   block5.display();
   block6.display();
   block7.display();
   block8.display();
   block9.display();
   block10.display();
   block11.display();
   block12.display();
   block13.display();
   block14.display();
   block15.display();
   block16.display();

   blocks1.display();
   blocks2.display();
   blocks3.display();
   blocks4.display();
   blocks5.display();
   blocks6.display();
   blocks7.display();
   blocks8.display();
   blocks9.display();

   slingShot.display();
   ground_.display();
   stand1.display();
   stand2.display();

   drawSprites();
}
function mouseDragged(){
	Matter.Body.setPosition(this.ball, {x:mouseX, y:mouseY});
}

function mouseReleased(){
	slingShot.fly();
}
function score(){
    if(this.visibility < 0 &&  this.visibility >= 105){
        score++;
    }
}
function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(this.ball);
    }
}
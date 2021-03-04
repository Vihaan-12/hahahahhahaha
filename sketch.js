const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var tree1;
var mango1, mango2, mango3, mango4, mango5;

function preload(){
	boy=loadImage("boy.png");
  }

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    tree1 =new tree(1050,400);
    
    mango1 = new mango(1100,100,30);
    mango3 = new mango(1020,90,30);
    mango5 = new mango(1100,160,30);

    stone1 = new stone(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(stone1.body,{x:200, y:50});
}

function draw(){
    background("gray");
    Engine.update(engine);
    //strokeWeight(4);
   
    image(boy ,150,5,200,300);

tree1.display();

    ground.display();

    stone1.display();
    platform.display();

mango1.display();
mango3.display();
mango5.display();

textSize(25);
text("press space for another chance", 100,30);

    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});

}


function mouseReleased(){

    slingshot.fly();
}

function keyPressed(){

if(keyCode===32){
    slingshot.attach(stone1.body);
}

}
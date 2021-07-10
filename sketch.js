var bg;
var boy;
var flake1;
var flake2;
var flake3;
var flake4;
var flake5;
var sound;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){
bg=loadImage("snow3.jpg");
boyImage=loadImage("image.png");
sound=loadSound("music.mp3");
}



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  boy = createSprite(450,250,80,80);
  boy.addImage(boyImage) 
  boy.scale=1.3;
  flake1=new Snow(100,90,40,40);
  flake2=new Snow(250,17,40,40);
  flake3=new Snow(480,70,40,40);
  flake4=new Snow(600,49,40,40);
  flake5=new Snow(750,62,40,40);

}

function draw() {
  background(bg);  
  Engine.update(engine);
  sound.play();
  drawSprites();
  flake1.display();
  flake2.display();
  flake3.display();
  flake4.display();
  flake5.display();

  
}
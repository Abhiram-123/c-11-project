var road;
var path,path1,path2;
var runner;

//var man
function preload(){
  //pre-load images
  road=loadImage("path.png")
  man=loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200,10,10)
  path.addImage(road);
  path.velocityY= 4 ;
  path.scale=1.2;

  runner=createSprite(100,300,10,10);
  runner.addAnimation("manr",man);
  runner.scale=0.1
  
  path1=createSprite(400,250,10,370);
  path2=createSprite(10,400,10,370);
  path1.visible=false;
  path2.visible=false;
}

function draw() {
  background(0);
 drawSprites()
 if(path.y > 400){
 path.y = height/2;
 runner.x=World.mouseX;
 }
 runner.collide(path1);
 runner.collide(path2);
}

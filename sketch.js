 const Engine=Matter.Engine
 const World=Matter.World
 const Bodies=Matter.Bodies
 var en,wo
var score=0
var bg1,backgroundimg

function preload(){
  returnn()
}
function setup() {
  createCanvas(800,500);
  stroke(255)
  en=Engine.create()
  wo=en.world
  console.log(en)
box1= new Box(230,430)
  box1= new Box(230,430)
  box2= new Box(240,430)
  box3= new Box(250,430)
  box4= new Box(220,430)
  box5= new Box(200,430)
  box6= new Box(550,330)
  box7= new Box(560,330)
  box8= new Box(570,330)
  box9= new Box(580,330)
  box10= new Box(590,330)
  
  ground1=new Ground(200,450)
 ground2=new Ground(600,350)
 ball1=new Ball(50,50)
 rope1=new Rope(ball1.ball,{x:100,y:100})
 
 }

function draw() {
  //camera.zoom=camera.zoom+1
  
  if (backgroundimg){
    background(backgroundimg);  
  }
  Engine.update(en)
 
 
  
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
 
  box1.score()
  box2.score()
  box3.score()
  box4.score()
  box5.score()
  box6.score()
  box7.score()
  box8.score()
  box9.score()
  box10.score()
 

 ground1.display()
 ground2.display()
 ball1.display()
 rope1.display()
text("SCORE : "+score,700,40)
 drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(ball1.ball,{x:mouseX,y:mouseY})
}
function mouseReleased(){
rope1.fly()
}
function keyPressed(){
  if(keyCode===32){
    rope1.attach(ball1.ball)
  }
}
async function returnn(){
  var a=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var convert=await a.json()
  var date= convert.datetime
  var hour=date.slice(11,13)
  console.log(convert)
  if(hour>06 && hour<13){
   bg="bg1.gif"
  }
  else{
    bg="bg2.gif"
  }
  backgroundimg=loadImage(bg)
}
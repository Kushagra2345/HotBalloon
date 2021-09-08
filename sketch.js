var newX=0;
var gameState="PLAY"
var score=0;
var life=5;
var obstBalloonGrp;

function preload(){
  tree1Img=loadImage("tree1.png")
  tree2Img=loadImage("tree2.png")
  tree3Img=loadImage("tree3.png")

  airBalloon2Img=loadImage("airBalloon2.png")
  airBalloon3Img=loadImage("airBalloon3.png")
  airBalloon4Img=loadImage("airBalloon4.png")

  backGround=loadImage("backgroundImg.png")
 // Wall2=createSprite(width,height/2,20,height)
  //wall=createSprite(0,height/2,20,height) 
  

}
function setup() {
  createCanvas(displayWidth,displayHeight);
  player1=new Player()
  
  platformGrp=new Group();

  platform=new Platform(width,displayHeight-100)
  platformGrp.add(platform.body)

  

   
}

function draw() {
  background(backGround);  
  drawSprites();

 
  if (life === 0){
    gameState="END"
  }

  if (life!== 0){
 if (frameCount%100===0){ 
  platform=new Platform(width,displayHeight-100)
  platformGrp.add(platform.body)
 }
  score=Math.round(score+(frameCount/100))
  player1.body.velocityY+=2

  if(player1.body.collide(platformGrp)){
    gameState="END"
  }

  if (frameCount% 300 === 0){
    obstBalloon1=new ObstacleBalloon(random(width,width+100),random(50,300))
   platformGrp.add(obstBalloon1.body)
  }

  if (player1.body.x<0 || player1.body.x<width){
    player1.body.x=width/2-300
  }

}
  textSize(25)
  fill("white")
  text("Your Score : "+score,50,50)
  text("Lives left = "+life,width-170,50)

  player1.body.collide(platformGrp,lives)
  createEdgeSprites();
 

  
//  player1.body.bounceOff(wall)
  player1.body.bounciness=0.2

drawSprites();
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    player1.body.velocityY=-23
  }
  
 

}

function lives(player,platform){
  life--
  platform.destroy()
}
var mario,mario_standingImg,mario_runningImg,ground,groundImg,bg,bgImg

function preload(){
  mario_standingImg=loadAnimation("mario00.png")
  mario_runningImg=loadAnimation("mario00.png","mario03.png","mario01.png","mario02.png")
  groundImg=loadImage("ground2.png")
  bg=loadImage("bg.png")


}

function setup(){
  createCanvas(400,400)
  mario=createSprite(50,320,20,20)
  mario.addAnimation("standing",mario_standingImg)
  mario.addAnimation("running",mario_runningImg)
  ground=createSprite(200,370,400,65)
  ground.addImage(groundImg)
  ground.scale=0.75

  
}

function draw(){
  background(bg)
  camera.position.x=mario.x
  if(keyIsDown(RIGHT_ARROW)){
    mario.changeAnimation("running",mario_runningImg)
    mario.x=mario.x+5
  }else{
    mario.changeAnimation("standing",mario_standingImg)
  }
  if(keyDown("space")){
    mario.velocityY=mario.velocityY-3
  }
  mario.velocityY=mario.velocityY+0.5
  mario.collide(ground)
  drawSprites()
  
}

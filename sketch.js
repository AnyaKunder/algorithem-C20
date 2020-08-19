var movingRect, fixedRect

function setup() {
  
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 50, 50);
  movingRect.shapeColor="yellow"
  fixedRect=createSprite(200,200,50,50);
  fixedRect.shapeColor="yellow"
movingRect.velocityX=-4
fixedRect.velocityX=+4
}

function draw() {
  background("purple");  

  /*movingRect.x=mouseX
  movingRect.y=mouseY*/
 if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
  &&fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2
  &&fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2
  &&movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2) {
   movingRect.shapeColor="white"
   fixedRect.shapeColor="white"
   movingRect.velocityX=movingRect.velocityX*(-1)
   fixedRect.velocityX=fixedRect.velocityX*(-1)
 }

 else {
  movingRect.shapeColor="yellow"
  fixedRect.shapeColor="yellow"
 }

  drawSprites();
}
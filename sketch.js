function setup() {
  createCanvas(800,400);
 box1 = createSprite(400, 200, 50, 50);
 box1.shapeColor = "red"
 movingbox = createSprite(300,100, 20,20);
 movingbox.shapeColor = "red"
}

function draw() {
  background(255,255,255);  
  movingbox.x = World.mouseX
  movingbox.y = World.mouseY
  if(movingbox.x - box1.x<movingbox.width/2+box1.width/2
    && box1.x - movingbox.x <box1.width/2 + movingbox.width/2
    && box1.y - movingbox.y <box1.height/2 + movingbox.height/2
    && movingbox.y - box1.y <movingbox.height/2 +box1.height/2){
 movingbox.shapeColor = "lightblue"
 box1.shapeColor = "lightblue"
  } else {
    movingbox.shapeColor = "red"
  box1.shapeColor = "red"
  }

  
  
  

  drawSprites();
}

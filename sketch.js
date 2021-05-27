var rectfix
var rectmove

function setup() {
  createCanvas(800,400);
  rectfix = createSprite(200, 200, 50, 50);
  rectmove = createSprite(400, 200, 80, 40);
  rectfix.shapeColor = "green"
  rectmove.shapeColor = "green"

}

function draw() {
  background("black");
  
  rectmove.x = World.mouseX
  rectmove.y = World.mouseY

  if(rectmove.x-rectfix.x < rectfix.width/2+rectmove.width/2 &&
    rectfix.x-rectmove.x < rectfix.width/2+rectmove.width/2 &&
    rectmove.y-rectfix.y < rectfix.height/2+rectmove.height/2 &&
    rectfix.y-rectmove.y < rectfix.height/2+rectmove.height/2){
    rectfix.shapeColor = "red"
    rectmove.shapeColor = "red"
 }
  else{
    rectfix.shapeColor = "green"
    rectmove.shapeColor = "green"
  }
  drawSprites();
}
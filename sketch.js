var entity303;
function setup() {
  createCanvas(400,400);
  entity303=createSprite(200,200,50,50);
}
 // PLEASE HOLD THE KEY WHICH U ARE PRESSING


function draw() 
{
  background(30);
if (keyIsDown(DOWN_ARROW)){
  background("lime");
}
if(keyIsDown(UP_ARROW)){
  background("blue");
}
if (keyIsDown(LEFT_ARROW)){
  background("yellow");
}
if (keyIsDown(RIGHT_ARROW)){
  background("red");
}
drawSprites()
}





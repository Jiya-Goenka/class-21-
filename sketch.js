var fixed,moving;
var block1, block2;

function setup() {
  createCanvas(1200,800);
  fixed=createSprite(200, 200,50,50 );
  fixed.shapeColor="green";
  moving=createSprite(400,200,80,30);
  moving.shapeColor="green";
  block1=createSprite(100,100,50,50);
  block1.shapeColor="green";
  block2=createSprite(200,100,50,50);
  block2.shapeColor="green";
}

function draw() {
  background(255,255,255);
    moving.x=World.mouseX
    moving.y=World.mouseY
    console.log(moving.x-fixed.x);

    if(isTouching(moving,block1)){
      moving.shapeColor="red";
   block1.shapeColor="red";

    }
    else{
     moving.shapeColor="green";
    block1.shapeColor="green";
    }

    bounceOff(block2,moving);
   
  drawSprites();
}

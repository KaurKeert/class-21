
var fixedRect, movingRect;
var dog, cat;

function setup() {
  createCanvas(1000,200);
 
 
 dog = createSprite(800, 100,30,80);
  dog.shapeColor = "lime";

  cat = createSprite(100, 100, 50, 50);
  cat.shapeColor = "pink";
  cat.velocityX=7
  
}

function draw() {
  background(0,0,0);  
 
 if( isTouching(cat,dog))
{
cat.x=100


}
 /*if(isTouching(cat,dog)){


text("GAMEOVER",500,500)

 }*/

//bounceOff(movingRect,fixedRect)
  drawSprites();
}

function collide(object1,object2){

  if(object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2)
    {

      object1.velocityX=0;

    }




}
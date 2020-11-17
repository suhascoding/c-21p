var bullet,wall,speed,weight,thickness;



function setup() {
  createCanvas(1600,400);
 bullet =  createSprite(50, 200, 50, 50);
 wall = createSprite(1500,200,thickness,height/2);
 
 
 speed = random(23,32);
 weight = random(30,52);
 thickness = random(22,83);
bullet.velocityX = speed;

}

function draw() {
  background(255,255,255);  
  drawSprites();
  wall.shapeColor = color(80,80,80);

if(collided(bullet,wall)){
  bullet.velocityX = 0;
  var damage = 0.5*weight*speed*speed/thickness*thickness*thickness;

  if(damage>10){
    wall.shapeColor = color(255,0,0);
  }

  if (damage<10){
    wall.shapeColor = color(0,255,0);
  }

}
}

function collided(bullet1,wall1){
  bulletRightEdge=bullet1.x+bullet1.width;
  wallLeftEdge = wall1.x;

  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  else{
    return false;
  }
}



var cat, cat_sitting, catImage;
var ground, groundImage;
var mouse, mouse_standing, mouse_cheese, mouse_inspect;
function preload() {
    //load the images here
   catImage = loadImage("images/cat1.png");
    cat_sitting = loadAnimation("images/cat2.png", "images/cat3.png");
    

    mouse_standing = loadAnimation("images/mouse2.png", "images/mouse3.png");
   mouse_cheese = loadImage("images/mouse1.png");
   mouse_inspect = loadImage("images/mouse4.png");
  
   groundImage = loadImage("images/garden.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    

    ground = createSprite(10, 350, 60, 60);
    ground.addImage("ground", groundImage);

 cat = createSprite(400, 600, 40, 10);
 cat.addImage("cat", catImage);
 cat.addAnimation("sitting", cat_sitting);
 
 
 cat.scale = 0.1;

  mouse = createSprite(40, 600, 10, 10);
  mouse.addAnimation("standing", mouse_standing);
  mouse.addImage("cheese", mouse_cheese);
  mouse.addImage("inspect", mouse_inspect);
  
  mouse.scale = 0.1;

  cat.setCollider("rectangle", 0, 0, cat.height, cat.width); 
  mouse.setCollider("rectangle", 0, 0, mouse.width, mouse.height);

  cat.debug = true
  mouse.debug = true

}

function draw() {
 keyPressed();
    background(255);
    //Write condition here to evalute if tom and jerry collide

    cat.collide(mouse);

    if(cat.isTouching(mouse)){
       cat.changeImage("cat");
       mouse.changeImage("inspect");

    }
      
      
      
  

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === DOWN_ARROW){
 
    cat.velocityY = 3;
    mouse.changeImage("cheese");
    cat.changeAnimation("sitting");
    mouse.frameDelay = 25;

  }  
 if(keyCode === LEFT_ARROW){

    cat.velocityX = -3;
    mouse.changeImage("cheese");
    cat.changeAnimation("sitting");
    mouse.frameDelay = 25;
 }
 if (keyCode === RIGHT_ARROW){

    cat.velocityX = 3;
    mouse.changeImage("cheese");
    cat.changeAnimation("sitting");
    mouse.frameDelay = 25;

 }

 if(keyCode === UP_ARROW){
     mouse.changeImage("cheese");
     cat.changeAnimation("sitting");
     mouse.frameDelay = 25;
 }
}
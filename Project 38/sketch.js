var PLAY = 1
var END = 2
gameState = PLAY

var player,banana,obstacle,backGr,invsibleGr;
var score;
var monkeyRun,bananaIm,obstIm,backGrIm;
var foodGroup,obstGroup;

function preload(){
  
  monkeyRun = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaIm = loadImage("banana.png");
  obstIm = loadImage("stone.png");
  backGrIm = loadImage("jungle.jpg")
}

function setup() {
  createCanvas(600, 400);
  
  backGr = createSprite(0,0,600,400);
  backGr.addImage(backGrIm);
  backGr.setVelocity(-5,0);
  backGr.scale = 1.5;
  
  player = createSprite(100,287,20,20);
  player.addAnimation("moving",monkeyRun);
  player.scale = 0.1;
  
  invisibleGr = createSprite(100,350,150,10);
  invisibleGr.visible = false;
  
 foodGroup = createGroup();
 obstGroup = createGroup(); 
  
  score = 0;
}

function draw() {
  background(220);
  
  if(gameState === PLAY){
    camera.y = player.y;
    
    if(backGr.x<0){
    backGr.x = backGr.width/2;
  }
    
      food();  
obstacle();
    
    player.velocityY = player.velocityY+0.8;
    
    if(keyDown("space")){
      player.velocityY = -10;
    }
    
    player.collide(invisibleGr);
    
    switch(score){
        case 10: player.scale=0.12;
                break;
        case 20: player.scale=0.14;
                break;
        case 30: player.scale=0.16;
                break;
        case 40: player.scale=0.18;
                break;
        case 50: player.scale=0.18;
                break;
        case 60: player.scale=0.18;
                break;
        case 70: player.scale=0.18;
                break;
        case 80: player.scale=0.18;
                break;
        case 90: player.scale=0.18;
                break;
        default: break;
    }
    
    if(player.isTouching(foodGroup)){
      foodGroup.destroyEach();
      score = score + 2;
    }
        
    if(player.isTouching(obstGroup)){
      obstGroup.destroyEach();
      player.scale = 0.1;
      score = score-3;
      if (score<0)
        {
          score = 0;
        }
     // gameState = END;
      }
    
      
    
  
    
    
    
  }
  
  
  drawSprites();
  
  stroke("white");
  textSize (20);
  fill("white");
  text("score : "+score,500,50);
}

function food(){
  if (frameCount % 80 === 0){
  var banana = createSprite(400,100);
  banana.y = Math.round(random(120,200));
  banana.addImage(bananaIm);
  banana.scale = 0.1;
  banana.velocityX = -8;
    
    banana.lifetime = 80;
    foodGroup.add(banana);
  }
}

function obstacle(){
  if(frameCount % 300 === 0){
    var stone = createSprite(400,340);
    stone.y = Math.round(random(287,287));
    stone.addImage(obstIm);
    stone.scale = 0.3;
    stone.velocityX = -5;
    
    stone.lifetime = 120;
    obstGroup.add(stone);
    
    stone.depth = player.depth
    player.depth = stone.depth+1
  }
}












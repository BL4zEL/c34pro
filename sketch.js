var dog,dogi ,happyDog, database, foodS, foodStock;

function preload()
{
  dogi=loadImage("images/dogImg.png")
  happyDog=loadImage("images/dogImg1.png")

}

function setup() {
  createCanvas(800, 700);
  
  database= firebase.database();

  dog=createSprite(200,200,100,100)
  dog.addImage(dogi);

  foodStock = database.ref('Food');
  foodStock.on("value",readStock)
  
}


function draw() {  
  background(46, 139, 87)
 if (keyWentDown(UP_ARROW)) {
   writeStock(foodS);
   dog.addImage(happyDog) 
 }
  drawSprites();
 text("NOTE:PRESS UP ARROW TO FEED MILK TO THE DOG",300,200)
}


function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if (x<=0) {
    x=0;
  } else {
    x=x-1;
  }
database.ref('/').update({
  Food:x
})
}


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
losu=[]
function preload(){
    
  
    manImg = loadImage("walking_1.png")
}

function setup(){
    createCanvas(1200,600);
    engine=Engine.create();
  world=engine.world;
thunder= new Thunder(random(0,1190),70)  
thunder1= new Thunder(random(0,1190),70)  
thunder2= new Thunder(random(0,1190),70)  
thunder3= new Thunder(random(0,1190),70)  
    
 man = Bodies.circle(600,500,200,{ isStatic: true});
}

function draw(){
    Engine.update(engine)
    background("black")
    thunder.display();
    thunder1.display();
    thunder2.display();
    thunder3.display();
    // man.display();
    image(manImg, man.position.x,man.position.y,200,200);

    //if(frameCount % 60 === 0){
      gangster = new Gangster(random(0,1190),70);
      losu.push(gangster)
      
      
    //}
    for (let i = 0; i < losu.length; i++) {
        const element = losu[i];
        losu[i].display();  
    }
  drawSprites();  
}   


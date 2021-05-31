const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var backgroundImg,platform1,platform2;
var hex, slingshot;
var gameState = "onSling";


function preload() {
    hex = loadImage("polygon.png");
    imageMode(CENTER);
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);
}

function setup(){
    var canvas = createCanvas(2400,800);
    background("brown");
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,2400,20);
    platform1 = new Ground(210,275,250,10);
    platform2 = new Ground(610,195,200,10)

    box1 = new Box(120,275,30,40);
    box2 = new Box(150,275,30,40);

    box3 = new Box(180,275,30,40);
    box4 = new Box(210,275,30,40);

    box5 = new Box(240,275,30,40);
    box6 = new Box(270,275,30,40);

    box7 = new Box(300,275,30,40);
    box8 = new Box(330,235,30,40);

    box9 = new Box(360,235,30,40);
    box10 = new Box(390,235,30,40);

    box11 = new Box(420,235,30,40);
    box12 = new Box(450,235,30,40);

    box13 = new Box(360,135,30,40);
    box14 = new Box(390,195,30,40);

    box15 = new Box(420,195,30,40)
    box16 = new Box(390,155,30,40);
    
    box21 = new Box(550,195,30,40);
    box22 = new Box(580,195,30,40);
    box23 = new Box(610,195,30,40);
    box24 = new Box(640,195,30,40);
    box25 = new Box(670,195,30,40);
    box26 = new Box(580,155,30,40);
    box27 = new Box(610,155,30,40);
    box28 = new Box(640,155,30,40);
    box29 = new Box(610,115,30,40);

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingshot = new SlingShot(this.polygon,{x:200, y:200});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();

    hex.display();
    platform1.display();
    plantform2.display();
    slingshot.display();    
}

function mouseDragged(){
    if(gameState !== "launched")
    {
    Matter.Body.setPosition(hex.body, {x: mouseX , y: mouseY}); 
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
      //  slingshot.attach(hex.body);
    }
} 
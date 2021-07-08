var engine,world;

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var polygonImg;
function preload(){
    
    polygonImg=loadImage("polygon.png");
}

function setup(){
    createCanvas(850,600);

    engine = Engine.create();
    world = engine.world; 

    polygon = Bodies.circle(100,200,20,{isStatic:false});
    World.add(world,polygon);

   //stand2
    dot1 = new Box(600,280,25,25);
    dot2 = new Box(625,280,25,25);
    dot3 = new Box(650,280,25,25);
    dot4 = new Box(675,280,25,25);
    dot5 = new Box(700,280,25,25);
    dot6 = new Box(725,280,25,25);
    dot7 = new Box(750,280,25,25);
    dot8 = new Box(775,280,25,25);
   
    dot9 = new Box(625,250,25,25);
    dot10 = new Box(650,250,25,25);
    dot11 = new Box(675,250,25,25);
    dot12 = new Box(700,250,25,25);
    dot13 = new Box(725,250,25,25);
    dot14 = new Box(750,250,25,25);
    
    dot15 = new Box(650,220,25,25);
    dot16 = new Box(675,220,25,25);
    dot17 = new Box(700,220,25,25);
    dot18 = new Box(725,220,25,25);

    dot19 = new Box(675,190,25,25);
    dot20 = new Box(700,190,25,25);

    dot21 = new Box(685,160,25,25);
   //stand1
    block1 = new Box(200,480,25,25);
    block2 = new Box(225,480,25,25);
    block3 = new Box(250,480,25,25);
    block4 = new Box(275,480,25,25);
    block5 = new Box(300,480,25,25);
    block6 = new Box(325,480,25,25);
    block7 = new Box(350,480,25,25);
    
    block8 = new Box(225,450,25,25);
    block9 = new Box(250,450,25,25);
    block10 = new Box(275,450,25,25);
    block11 = new Box(300,450,25,25);
    block12 = new Box(325,450,25,25);
    
    block13 = new Box(250,420,25,25);
    block14 = new Box(275,420,25,25);
    block15 = new Box(300,420,25,25);

    block16 = new Box(265,390,25,25);
    block17 = new Box(290,390,25,25);

    block18 = new Box(280,360,25,25);

   stand1 = new Ground(275,500,200,10);
   stand2 = new Ground(690,300,220,10);

   ground = new Ground(425,590,850,20);
   wall = new Ground(840,300,20,600);

   sling = new SlingShot(polygon,{x:100,y:200});

    Engine.run(engine);
}

function draw(){
    background("violet");
    
    textSize("50");
    fill ("blue");
    text ("Drag the polygon to hit the blocks.",300,100);
    text ("And use spacebar to bring the polygon back.",280,150);
    
   imageMode(CENTER);

    image (polygonImg,polygon.position.x,polygon.position.y,40,40);

    push ();
    fill ("red");
    dot1.display();
    dot2.display();
    dot3.display();
    dot4.display();
    dot5.display();
    dot6.display();
    dot7.display();
    dot8.display();
    pop ();

    push ();
    fill ("blue");
    dot9.display();
    dot10.display();
    dot11.display();
    dot12.display();
    dot13.display();
    dot14.display();
    pop ();

    push ();
    fill ("orange");
    dot15.display();
    dot16.display();
    dot17.display();
    dot18.display();

    dot19.display();
    dot20.display();

    dot21.display();
    pop ();

    push ();
    fill ("red");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    pop ();

    push ();
    fill ("blue");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    pop ();

    push ();
    fill ("orange");
    block13.display();
    block14.display();
    block15.display();

    block16.display();
    block17.display();

    block18.display();
    pop();
    stand1.display();
    stand2.display();
    ground.display();
    wall.display();

    sling.display();
    drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode === 32){
        sling.attach(polygon);
    }
}
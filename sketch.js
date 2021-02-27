const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var bg,bgImage;

function preload(){

    bgImage = loadImage("Images/Fortuna.png");

}
function setup(){
    createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;

    bg = createSprite(width/2,height/2);
    bg.addImage(bgImage);
    bg.scale = 5;
}
function draw(){
    background(255);
    Engine.update(engine);
    drawSprites();   
}
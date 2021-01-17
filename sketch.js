var canvas;
var music;
var blue,green,pink,yellow;
var box;

function preload()
{
    music = loadSound("music.mp3");
}


function setup()
{
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    blue = createSprite(20,200,100,40);
    blue.shapeColor = "blue"; 
    
    green = createSprite(50,200,45,60);
    green.shapeColor = "green";

    pink = createSprite(90,100,60,50);
    pink.shapeColor = "pink";

    yellow = createSprite(450,600,50,56);
    yellow.shapeColor = "yellow";



    //create box sprite and give velocity
    box = createSprite(400,300,50,50)
    box.velocityY = 5;
    box.velocityX = 5; 

}

function draw()
 {
    background(gray);
    //create edgeSprite
    createEdgeSprite();
     


    //add condition to check if box touching surface and make it box
    

    drawSprites();
}

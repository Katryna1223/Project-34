const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render = Matter.Render;
var backdrop, monsterImg, superheroImg;
var ground, hero, fly, monster, box1, box2, box3, box4, box5, box6;
var box7, box8, box9, box10, box11, box12, box13, box14, box15;
var engine, world;
function preload() {
//preload the images here

backdrop = loadImage('images/GamingBackground.png');
monsterImg = loadImage('images/Monster-02.png');
superheroImg = loadImage('images/Superhero-01.png');
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: 3000,
        height: 800,
        wireframes: false
    }
});

  // create objects here
  ground = new Ground();
  hero = new Hero(300, 200, 40);
  fly = new Fly(hero.body, {x: 410, y: 40});

  box1 = new Box(330, 300);
  box2 = new Box(330, 300);
  box3 = new Box(330, 300);
  box4 = new Box(330, 300);
  box5 = new Box(330, 300);
  
  box6 = new Box(400, 300);
  box7 = new Box(400, 300);
  box8 = new Box(400, 300);
 
  box9 = new Box(430, 300);
  box10 = new Box(430, 300);
  box11 = new Box(430, 300);
  box12 = new Box(430, 300);

  box13 = new Box(510, 300);
  box14 = new Box(510, 300);
  box15 = new Box(510, 300);

  monster = new Monster(box12.body.position.x, 250, 50);
  
  Render.run(render);
  Engine.run(engine);
}

function draw() {
  background(backdrop);
  
  Engine.update(engine);

  ground.display();
  hero.display();
  fly.display();

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

  monster.display();
}
function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX, y: mouseY});
}

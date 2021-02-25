class Hero{
    constructor(x, y){
        var options = {
            isStatic: false,
            density: 3
            //frictionAir: 0.0004
        }
        this.image = loadImage('images/Superhero-01.png');
        this.body = Bodies.circle(x, y, 50, options);
        this.radius = 50;
        World.add(world, this.body);
    }
    display(){
       // var angle = this.body.angle;
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        translate(pos.x, pos.y);
        //rotate(angle);
        image(this.image, 0, 0, this.radius*2, 50);
        pop();
    }
}
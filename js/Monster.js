class Monster{
    constructor(x, y, r){
        var options = {
            isStatic: false
        }
        this.image = loadImage('images/Monster-02.png');
        this.body = Bodies.circle(x, y, r, options);
        this.radius = r;
        World.add(world, this.body);
    }
    display(){
       // var angle = this.body.angle;
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        translate(pos.x, pos.y);
        //rotate(angle);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
    }
}
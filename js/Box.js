class Box{
    constructor(x, y){
        var options = {
            isStatic: false,
            restitution: 0.5,
            density: 1, 
            friction: 1
        }
        this.color = [random(0, 255), random(0, 255), random(0,255)]
        this.body = Bodies.rectangle(x, y, 30, 30, options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(this.color[0], this.color[1], this.color[2]);
        strokeWeight(2);
        rect(0, 0, 30, 30);
        pop();
    }
}
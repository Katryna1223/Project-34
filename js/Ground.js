class Ground{
    constructor(){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(width/2, height-170, width, 20, options);
        World.add(world, this.body);
    }
    display(){
        fill(255);
        rectMode(CENTER);
        rect(width/2, height-170, width, 20);
    }
}
class Fly{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length: 500
        }
        this.rope = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        noStroke();
        line(pointA.x, pointA.y, pointB.x ,pointB.y);
    }
}
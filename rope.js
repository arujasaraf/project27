class Rope{
    constructor(body1, body2, offsetX, offsetY){
       this.offsetX=offsetX
       this.offsetY=offsetY
        var options = {

            bodyA: body1,
            bodyB: body2,
            pointB:{x: this.offsetX, y :this.offsetY}
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
        
        var pointA = this.rope.bodyA.position; 
        var pointB = this.rope.bodyB.position;

        strokeWeight(2);

        var Ancor1X=pointA.x 
        var Ancor1Y=pointA.y

        var Ancor2X=pointB.x+this.offsetX
        var Ancor2Y=pointB.y+this.offsetY
       
        line(Ancor1X,Ancor1Y,Ancor2X,Ancor2Y);
    }
    
}
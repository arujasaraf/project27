class Bob{
    constructor(x, y) {
        var options = {
            'isStatic':false,
            'restitution':1.5,
            'friction':0.5,
            'density':1.2
        }

        this.body =Bodies.circle(x , y , 15 ,options);
        this.radius=15;
        
        World.add(world, this.body);
        }
        display(){
            var pos =this.body.position;
            push();
            
            translate(pos.x,pos.y);
            ellipseMode(RADIUS);
         
            ellipse(0,0, this.radius, this.radius);
            
            pop();
        }
}
class Circle {
    constructor(x,y,radius,angle){
        var options = {
            'restitution' : 0.5,
            'friction' : 1.0,
            'density' : 1.0
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.width = width;
        this.height = height;
        //this.image = loadImage("sprites/d2ed23559c47c65fffcb3163b34439b1_popsicle-stick-clipart-png-260-655.jpeg");
        World.add(world,this.body);
 }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        ellipse(0,0,this.radius);
        pop();
    }

}
class Rectangle{
    constructor(x,y,width,height){
        var options = {
            'restitution' : 0.5,
            'friction' : 1.0,
            'density' : 1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
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
        //imageMode(CENTER);
        rect(0,0,this.width, this.height);
        //image(this.image,0,0,his.width,this.height);
        pop();
    }

}
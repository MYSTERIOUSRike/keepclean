class paper {
    constructor(x, y, radius) {
          var options={
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2 
                    }
      
      this.body = Bodies.circle(x, y, radius, options);
      this.radius=radius
      this.image = loadImage("paper.png");
     
      World.add(world, this.body);
      
    }
    display(){
      var pos =this.body.position;
      
      push();
      translate(pos.x,pos.y)
     
      ellipseMode(RADIUS);
      fill(255);
      stroke(255)
      ellipse(0, 0, this.radius, this.radius,this.image);
      imageMode(CENTER);
      image(this.image, 0, 0, 60,60);
      pop();
    }
  };
  
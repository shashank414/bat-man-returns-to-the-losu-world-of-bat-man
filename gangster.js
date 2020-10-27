class Gangster {
  constructor(x,y) {
    var options = {
        isStatic: false
    }
    this.body = Bodies.circle(x,y,10,options);
    this.width = 10;
    this.height = 10;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    ellipseMode(CENTER);
    fill('blue');
    ellipse(pos.x, pos.y, this.width, this.height);
  }


}

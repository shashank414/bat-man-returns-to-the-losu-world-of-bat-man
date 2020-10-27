class Thunder {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,150,150,options);
      this.width = 150;
      this.height = 150;
      this.thunder0 = loadImage("1.png")
      this.thunder1 = loadImage("2.png")
      this.thunder2 = loadImage("3.png")
      this.thunder3 = loadImage("4.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
    var rand=Math.round(random(0,4))
    if (rand===0) {
      image(this.thunder0,random(0,1190), pos.y, this.width, this.height);
    }
    if (rand===1) {
      image(this.thunder1,random(0,1190), pos.y, this.width, this.height);
    }
    if (rand===2) {
      image(this.thunder2,random(0,1190), pos.y, this.width, this.height);
    }
    if (rand===3) {
      image(this.thunder3,random(0,1190), pos.y, this.width, this.height);
    }
      
    }
  };
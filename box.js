class Box  {
  constructor(x,y,width,height)
  {
    var options = {
      restitution:0.4,
      friction:1,
      isStatic: false,
    }
      this.box = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world,this.box);
      this.Visibility=255;
  }
  display()
  {
    rectMode(CENTER);
    if(this.box.speed<5){
      rect(this.box.position.x, this.box.position.y, this.width, this.height);
    }
    else{
      World.remove(world,this.box);
      this.Visibility = this.Visibility-5;
      tint (255,this.Visibility);
      }
  }
    
}
class ground{
    constructor (x,y,width,height) {
   var options={
isStatic:true
   }
   this.grounds = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.grounds);
    }
    display(){
      var opt =this.grounds.position;
      rectMode(CENTER);
      fill("brown");
      rect(opt.x, opt.y, this.width, this.height);
    
    }
}
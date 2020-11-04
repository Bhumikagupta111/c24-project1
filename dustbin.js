class dustbin0{
    constructor (x,y,width,height) {
   var options={
isStatic:true
   }
   this.dustbin = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image
      
      World.add(world, this.dustbin);
    }
    display(){
      var opt =this.dustbin.position;
      rectMode(CENTER);
      fill("white");
      rect(opt.x, opt.y, this.width, this.height);
    
    }
}
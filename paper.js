class papers{
    constructor (x,y,r){
var prop={
    
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
}


this.x=x;
this.y=y;
this.r=r;
this.paper=Bodies.circle(this.x,this.y,this.r/2,prop)
   World.add(world,this.paper);
}

display()
{
     var paperpos=this.paper.position;

     push();
     translate(paperpos.x,paperpos.y);
     rectMode(CENTER);
     strokeWeight(3);
     fill(255,0,255);
     ellipse(0,0,this.r,this.r);
     pop();
}
}
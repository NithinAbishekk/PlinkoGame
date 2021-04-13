class Ground{
    constructor(x,y){
        var options={
            'isStatic' : true
        }
        this.body = Bodies.rectangle(x,y,480,15,options);
        this.width = 480;
        this.height = 15 ;
        World.add(world, this.body);
    }

      display(){
          var pos = this.body.position;
          rectMode(CENTER);
          stroke("#1b0000");
          strokeWeight(5);
          fill("#654321");
          rect(pos.x,pos.y,this.width,this.height);
      }
}
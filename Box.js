class Box {
    constructor(x, y, width, height) {
        var options = {
          isStatic: true,
            'restitution':0.8,
            'friction':1.0,
            'density':1.2
        }
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.body = Bodies.rectangle(this.x,this.y,this.height,this.width,options)
        World.add(world, this.body);

        
      }
      display(){
       
        fill ("white")
        rect(this.x,this.y,this.width,this.height,)
        
        
      }







}
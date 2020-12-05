class Box{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.6,
            friction:0.7,
            density:0.5
        }
        this.box=Bodies.rectangle(x,y,40,40,options)
        this.fade=255
        World.add(wo,this.box)
    }
display(){
    if(this.box.speed<2.5){
    var angle=this.box.angle
    var pos=this.box.position
    push() 
translate(pos.x,pos.y)
rotate(angle)
rectMode(CENTER)
    fill("orange")
    rect(0,0,40,40)
    pop()
    }
    
  else{
World.remove(wo,this.box)
push()
this.visibility=this.visibilty-5
  }
}
score(){
    if(this.visibility<0&&this.visibilty>-150){
score++
    }
}
  
}

class Ground{
    constructor(x,y){
        var options={
            isStatic:true,
            density:0.5,
            friction:0.5,
            restitution:0
                }
                this.ground=Bodies.rectangle(x,y,250,20,options)
                World.add(wo,this.ground)

    }
    display(){
        var pos=this.ground.position
        fill("white")
        rectMode(CENTER)
        rect(pos.x,pos.y,250,20)
       
    }
}
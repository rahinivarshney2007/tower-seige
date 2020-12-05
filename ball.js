class Ball{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:1,
            friction:0.7,
            density:0.2
        }
        this.ball=Bodies.circle(x,y,20,options)
        World.add(wo,this.ball)
    }
display(){
    var pos=this.ball.position
    fill("orange")
    ellipseMode(RADIUS)
    ellipse(pos.x,pos.y,20)
}
}

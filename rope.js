class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:100,
            stiffness:0.4

        }
        this.b=pointB
        this.rope=Matter.Constraint.create(options)
        World.add(wo,this.rope)
    }
    display(){
       
if(this.rope.bodyA){
    var a=this.rope.bodyA.position
    var b=this.b
line(a.x,a.y,b.x,b.y)
}
    }
fly(){
    this.rope.bodyA=null
}

attach(body){
    this.rope.bodyA=body
}


}
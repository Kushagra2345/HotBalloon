class Player{
    constructor(){
        
        this.body=createSprite((width/2)-300,height/2)
        this.image=loadImage("hotballoon.png")
        this.body.addImage(this.image)
        this.body.scale=0.085
        this.body.debug=true;
        this.body.setCollider("circle",0,0,500)
    }


}
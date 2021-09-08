class Platform{
    constructor(x,y){
        var r=random([1,2,3])
        this.body=createSprite(x,y)
        this.body.velocityX=-(4+(score/500))
        this.body.lifetime=400
        this.body.debug=true;
       
        switch(r){
            case 1:this.body.addImage(tree1Img);
            this.body.scale=1.35
            this.body.setCollider("rectangle",0,0,200,210)
            break;
            case 2:this.body.addImage(tree2Img);
            this.body.scale=0.35
            this.body.setCollider("rectangle",0,0,500,800)
            break;
            case 3:this.body.addImage(tree3Img);
            this.body.scale=1.4
            this.body.setCollider("rectangle",0,0,200,200)
            break;
        }
        
    }


}
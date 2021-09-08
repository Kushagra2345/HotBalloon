class ObstacleBalloon{
    constructor(x,y){
            var r=random([1,2,3])
            this.body=createSprite(x,y)
            this.body.velocityX=-(4+(score/500))
            this.body.lifetime=400
            this.body.debug=true;

           
            switch(3){
                case 1:this.body.addImage(airBalloon2Img);
                this.body.scale=0.5
                this.body.setCollider("circle",0,-20,110)
                break;
                case 2:this.body.addImage(airBalloon3Img);
                this.body.scale=0.45
                this.body.setCollider("circle",0,-20,80)
                break;
                case 3:this.body.addImage(airBalloon4Img);
                this.body.scale=0.45
                this.body.setCollider("circle",0,-20,100)
                break;
            }
            
        
    }
}
class Player{
    constructor(xPos, yPos, radius, maxSpeed, soundRadius){
        this.x = xPos;
        this.y = yPos;
        this.radius = radius;
        this.soundRadius = soundRadius;
        
        this.speedY = 0;
        this.speedX = 0;
        this.maxSpeed = maxSpeed;
        this.acceleration = 0.2;
        this.friction = 0.09;
        this.roomBorders = house.borders;

        this.controls = new Controls;
    }
    
    updatePos(borders){            //irányítás
        this.#move();
        //this.sensor.update();
    }

    draw(ctx){      //rajzolás
        /*ctx.beginPath();
        ctx.strokeStyle = "rgba(175, 175, 175, 0.15)"
        ctx.fillStyle = "rgba(175, 175, 175, 0.15)"
        ctx.arc(this.x, this.y, this.soundRadius, 0, 2*Math.PI);
        ctx.fill();
        ctx.stroke();*/


        //this.sensor.draw(ctx);
        ctx.beginPath();    //karakter
        ctx.strokeStyle = "black"
        ctx.fillStyle = "black"
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        ctx.fill();
        ctx.stroke();

    }

    #move(){
        if (this.controls.forward) {
            this.speedY += this.acceleration;
        }
        if (this.controls.reverse) {
            this.speedY -= this.acceleration;
        }
        if (this.controls.left) {
            this.speedX -= this.acceleration;    
        }
        if (this.controls.right) {
            this.speedX += this.acceleration;
        }
        
        this.speedX > this.maxSpeed ? this.speedX = this.maxSpeed:this.speedX = this.speedX;
        this.speedY > this.maxSpeed ? this.speedY = this.maxSpeed:this.speedY = this.speedY;
        this.speedX < -this.maxSpeed ? this.speedX = -this.maxSpeed:this.speedX = this.speedX;
        this.speedY < -this.maxSpeed ? this.speedY = -this.maxSpeed:this.speedY = this.speedY;
        
        this.speedX > 0 ? this.speedX -= this.friction : this.speedX = this.speedX;
        this.speedX < 0 ? this.speedX += this.friction : this.speedX = this.speedX;
        this.speedY > 0 ? this.speedY -= this.friction : this.speedY = this.speedY;
        this.speedY < 0 ? this.speedY += this.friction : this.speedY = this.speedY;

        Math.abs(this.speedY) < this.friction ? this.speedY = 0 : this.speedY = this.speedY;
        Math.abs(this.speedX) < this.friction ? this.speedX = 0 : this.speedX = this.speedX;
        
        
        this.y -= this.speedY;
        this.x += this.speedX;
    }

    #canMove(){
        
    }
}
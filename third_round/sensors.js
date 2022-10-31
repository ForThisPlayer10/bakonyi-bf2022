class MoveSensor{
    constructor( xPos, yPos, range, spread = Math.PI/4, player){
        this.x = xPos,
        this.y = yPos,

        this.rayCount = 200;
        this.rayLength = range;
        this.raySpread = spread;
        this.rays = [];
        this.player = player;
    }

    update(){
        this.#castRays();
        
    }
    
    draw(ctx){
        for (let i = 0; i <this.rayCount; i++) {
            ctx.beginPath();   
            ctx.strokeStyle = "black"
            ctx.fillStyle = "black"
            ctx.arc(this.rays[i][0].x, this.rays[i][0].y, 10, 0, 2*Math.PI);
            ctx.fill();
            ctx.stroke();
            ctx.beginPath();
            ctx.lineWidth = 3;
            ctx.strokeStyle = "green";
            ctx.moveTo(this.rays[i][0].x, this.rays[i][0].y);
            ctx.lineTo(this.rays[i][1].x, this.rays[i][1].y);
            ctx.stroke();
        }
    }

    #castRays(){
        this.rays = [];
        for (let i = 0; i < this.rayCount; i++) {
            const rayAngle = (5*Math.PI)/4 + lerp(this.raySpread/2, -this.raySpread/2, this.rayCount == 1 ? 0.5 : i/(this.rayCount-1));
            const start = {x:this.x, y:this.y}
            const end = {x: this.x-Math.sin(rayAngle)*this.rayLength, y: this.y-Math.cos(rayAngle)*this.rayLength};
            this.rays.push([start, end]);
        }
    }
}

/*class PlayerSensor{
    constructor(player, radius){
        this.player = player;
        this.rayCount = 30;
        this.rayLength = radius;
        this.raySpread = Math.PI*2;

        this.rays = [];
        
    }

    update(){
        this.#castRays();
        
    }
    
    draw(ctx){
        for (let i = 0; i <this.rayCount; i++) {
            ctx.beginPath();   
            ctx.strokeStyle = "black"
            ctx.fillStyle = "black"
            ctx.arc(this.rays[i][0].x, this.rays[i][0].y, 20, 0, 2*Math.PI);
            ctx.fill();
            ctx.stroke();
            ctx.beginPath();
            ctx.lineWidth = 3;
            ctx.strokeStyle = "green";
            ctx.moveTo(this.rays[i][0].x, this.rays[i][0].y);
            ctx.lineTo(this.rays[i][1].x, this.rays[i][1].y);
            ctx.stroke();
        }
    }
    
    lerp(A, B, t){
        return A+(B-A)*t;
    }

    #castRays(){
        this.rays = [];
        for (let i = 0; i < this.rayCount; i++) {
            const rayAngle = (5*Math.PI)/4 + this.lerp(this.raySpread/2, -this.raySpread/2, this.rayCount == 1 ? 0.5 : i/(this.rayCount-1));
            const start = {x:this.x, y:this.y}
            const end = {x: this.x-Math.sin(rayAngle)*this.rayLength, y: this.y-Math.cos(rayAngle)*this.rayLength};
            this.rays.push([start, end]);
        }
    }
}*/
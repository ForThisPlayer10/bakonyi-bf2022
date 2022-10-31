class Room{
    constructor(x, y, width, height, color = "black"){
        this.x = x; //a középpont
        this.y = y
        this.width = width; //szélesség, magasság, szobák
        this.height = height;
        this.roomCount = 4;
        this.color = color
        //this.roomSize = 300;

        this.left = x - width/2;
        this.right = x + width/2;
        this.top = y - height/2;
        this.bottom = y + height/2;
        this.doorSize = 70;
        
        this.coords = {
            0: {x: 215, y: 200,roomSizeX: 350,roomSizeY: 350, do: "bottom"},
            1: {x: 615, y: 200,roomSizeX: 450,roomSizeY: 350, do: "right"},
            2: {x: 1410, y: 185, roomSizeX: 300, roomSizeY: 320, do: "bottom"}, // 1410, 200
            3: {x: 430, y: 775, roomSizeX: 780, roomSizeY: 400, do: "top"},
        };
        /*const topLeft = {x: this.left, y: this.top};
        const topRight = {x: this.right, y: this.top};
        const bottomLeft = {x: this.left, y: this.bottom};
        const bottomRight = {x: right, y: bottom};
        this.borders.push(
            [topLeft, topRight],
            [bottomLeft, bottomRight]
        );*/
        this.borders = new Array(this.roomCount);
        
    }
    
    draw(ctx){
        ctx.lineWidth = 8;
        ctx.strokeStyle = this.color;
        ctx.beginPath();
        //console.log(this.x)
        ctx.moveTo(this.left, this.top);
        ctx.lineTo(this.right, this.top);
        ctx.lineTo(this.right, this.bottom / 2 - this.doorSize); //szegély
        ctx.stroke();
        ctx.beginPath();
        ctx.lineTo(this.right, this.bottom/2 + this.doorSize);
        ctx.strokeStyle = this.color;
        ctx.lineTo(this.right, this.bottom);
        ctx.lineTo(this.left, this.bottom);
        ctx.lineTo(this.left, this.top);
        ctx.stroke();
        
        ctx.lineWidth = 4;
        ctx.strokeStyle = this.color;
        ctx.moveTo(this.coords[0].x, this.coords[0].y);
        for (let i = 0; i < this.roomCount; i++) {
            this.drawRoom(ctx, this.coords[i].x, this.coords[i].y, this.coords[i].roomSizeX, this.coords[i].roomSizeY, this.coords[i].do, i);
            
        }
        
    }
    
    drawRoom(ctx, x, y, w, h, doorOrientation, roomId){
        let left = x - w/2;
        let right = x + w/2;
        let top = y - h/2;
        let bottom = y + h/2;
        
        let vMiddle = (top + bottom)/2;
        let hMiddle = (left+right)/2;
        let doorStart;
        let doorEnd;
        
        
        switch (doorOrientation) {
            case "top":
                doorStart = hMiddle - this.doorSize;
                doorEnd = hMiddle + this.doorSize;
                ctx.beginPath();
                ctx.strokeStyle = this.color;
                ctx.moveTo(left, top);
                ctx.lineTo(doorStart, top);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(doorEnd, top);
                ctx.lineTo(right, top);
                ctx.lineTo(right, bottom);
                ctx.lineTo(left, bottom);
                ctx.lineTo(left, top);
                ctx.stroke();
            break;
            case "right":
                doorStart = vMiddle - this.doorSize;
                doorEnd = vMiddle + this.doorSize;
                ctx.strokeStyle = this.color;    
                ctx.beginPath();
                ctx.moveTo(left, top);
                ctx.lineTo(right, top);
                ctx.lineTo(right,doorStart); //szegély
                ctx.stroke();
                ctx.beginPath();
                ctx.strokeStyle = this.color;
                ctx.lineTo(right,doorEnd);
                ctx.lineTo(right, bottom);
                ctx.lineTo(left, bottom);
                ctx.lineTo(left, top);
                ctx.stroke();
            break;
            case "bottom":
                const sensor = new MoveSensor(left, top, 300);
                sensor.update();
                sensor.draw(ctx);
                doorStart = hMiddle - this.doorSize;
                doorEnd = hMiddle + this.doorSize;
                ctx.strokeStyle = this.color;
                ctx.beginPath();
                ctx.moveTo(left, top);
                ctx.lineTo(right, top);
                ctx.lineTo(right, bottom);
                ctx.lineTo(doorEnd, bottom);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(doorStart, bottom);
                ctx.lineTo(left, bottom);
                ctx.lineTo(left, top);
                ctx.stroke();
                    
                    
            break;
            default:
                ctx.beginPath();
                ctx.strokeStyle = this.color;
                ctx.moveTo(left, top);
                ctx.lineTo(right, top);
                ctx.lineTo(right, bottom);
                ctx.lineTo(left, bottom);
                ctx.lineTo(left, top);
                ctx.stroke();
            break;
                        
        }
                    
        this.borders[roomId] = {};
        this.borders[roomId].left = left;
        this.borders[roomId].right = right;
        this.borders[roomId].top = top;
        this.borders[roomId].bottom = bottom;
        this.borders[roomId].doorOrientation = doorOrientation;
    }
                
}
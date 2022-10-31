var c = document.getElementById("mainCanvas");
var ctx = c.getContext("2d");
c.height = 1000;
c.width = 1600;

const house = new Room(c.width/2, c.height/2, c.width * 0.95, c.height * 0.95);
const player = new Player(Math.round(c.width/ 2) , Math.round(c.height/ 2) , 20, 4);
var slider = document.getElementById("speedSlider");
player.soundRadius = slider.value * 10;

slider.oninput = function(){player.maxSpeed = this.value; player.soundRadius = this.value * 10}

updateCanvas();

function updateCanvas(){
    c.height = 1000;
    c.width = 1600;
    house.draw(ctx);
    player.updatePos(house.borders);
    player.draw(ctx);
    requestAnimationFrame(updateCanvas);
}


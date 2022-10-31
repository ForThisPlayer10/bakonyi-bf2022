let next = document.getElementById("next");

class Color{
    constructor(array,x,y, color){
        this.array = array;
        this.x = x;
        this.y = y;
        this.color = color;
    }
    add_Color(){
        this.array[this.x][this.y].color = this.color;
        this.array[this.x][this.y].isItFree = false;
        return this.array[this.x][this.y];
    }
    /*add_Blue(){
        this.array[this.x][this.y].color = "blue";
        this.array[this.x][this.y].isItFree = false;
        return this.array[this.x][this.y];
    }
    add_Red(){
        this.array[this.x][this.y].color = "red";
        this.array[this.x][this.y].isItFree = false;
        return this.array[this.x][this.y];
    }*/
    
}
function change_Color(new_Array){
    for (let i = 0; i < new_Array.length; i++){
        document.getElementById(window.array[new_Array[i][0]][new_Array[i][1]].id).style.background = window.deff;
        window.array[new_Array[i][0]][new_Array[i][1]].color = window.deff;
    }
}

function animation(array){ // array with ids in order
    indexX = 0;
    indexY = 0;
    intervals = [];
    degs = [];
    basic = 130;
    delay = basic;
    all_Delay = 0;
    window.animation_Var = true;
    for (let i = 0; i < array.length; i++){
        setTimeout(()=>{
            change_Color(array[i]);
        },delay);
        delay+=basic;
    };
    all_Delay = delay+basic;
    setTimeout(()=>{
        window.animation_Var = false;
        lamdba = window.deff;
        window.deff = window.canPut;
        window.canPut = lamdba;
        next.style.background = window.deff;
        addPoints();
    },all_Delay);
    
}

function random_Id(length){length ? length : 20;let id = "";for (let i = 0; i < length; i++){id += Math.floor(Math.random()*9)}return id;}
function load(array){
    if (!window.animation_Var){
        document.getElementById("puzzle").innerHTML += "";
        let html = "";
        array = countPoint(array);
        for (let i = 0; i < array.length; i++){
            html += "<tr>"
            for (let j = 0; j < array[i].length;j++){
                array[i][j].id = random_Id(15); 
                html += `<td><span class="blank" id = "${array[i][j].id}" onmouseover="Check(${i}, ${j})" style="height: 30px; width: 30px;${array[i][j].selected ? "border: 2px solid blue;" : "padding : 2px;"} background-color: ${array[i][j].color ? array[i][j].color : "grey"};border-radius: 50%; display: inline-block;" onclick = "put(${i}, ${j})"></span></td>`
            }
            html += "</tr>";
        }
        document.getElementById("puzzle").innerHTML = html;
        next.style.background = window.deff;
    }
}

function countPoint(array) {
    
    for (let a = 0; a < array.length/2 ; a++) {
        for (let b = a; b < array.length -a; b++) {
            for (let c = a; c < array.length -a; c++) {
                array[b][c].worth = a+1; 
            }
        }
    }
    return array;
}

function addPoints(){
    let points = [0, 0]; 
    for (let i = 0; i < array.length; i++) {
     for (let j = 0; j < array[i].length; j++) {
        array[i][j].color == "red" ? points[0] += array[i][j].worth: array[i][j].color == "blue" ? points[1] += array[i][j].worth: false;
     }
   } 
   document.getElementById("redpoints").innerHTML = points[0];
   document.getElementById("bluepoints").innerHTML = points[1];
}
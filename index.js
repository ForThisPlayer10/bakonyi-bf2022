const t = document.getElementById("puzzle")
let table;
let len;
let canPlace = false;
var array = [];
var canPut = "blue";
var deff = "red";
var animation_Var = false;



function CheckInput() {
    let x = document.getElementById("in").value;
    //isNaN(x) ? alert("Számot üss be!") : x%2 ==0 ? alert("Páros számot üss be!") : len=x FillTable(x, x);
    if (isNaN(x)){
        alert("Számot írj be!");
    }else if(x%2 != 0) {
        alert("Páros számot írj be")
    }else if (x < 4) {
        alert("Négynél nagyobb számot írj be!")
    }else{
        len = x;
        FillTable(x, x);
    }
}

function FillTable(row, col) {
    window.array = [];
    for (let i = 0; i < row; i++) {
        window.array.push([]);
        for (let j = 0; j < col; j++){
            window.array[i].push({color : false, y : i, x : j, isItFree : true, worth : 0, selected : false});
        }
    }
    array[len/2-1][len/2-1].color = "red";
    array[len/2][len/2].color  = "red";
    array[len/2][len/2-1].color  = "blue";
    array[len/2-1][len/2].color  = "blue";
    load(array);
    canPlace = true;
}

function put(x,y){

    if (Check(x,y) && !window.animation_Var){
        let i = x;
        control = true;
        color = new Color(array,x,y, window.deff);
        !window.array[x][y].color ? window.array[x][y] = color.add_Color() : control = false;
        //if (window.deff == "red"){window.array[x][y] = color.add_Red(); }else if (window.deff == "blue"){window.array[x][y] = color.add_Blue()}
        load(window.array);
        let arrays = [];
        if (control){
            let lamdba_Array = [];
            for (let i = y-1; i > 0; i--){lamdba_Array.push([x,i]); if (window.array[x][i].color == window.deff){for (let k = 0; k < lamdba_Array.length; k++){!arrays[k] ? arrays[k] = [lamdba_Array[k]] : arrays[k].push(lamdba_Array[k]);;};break}if(!window.array[x][i].color){break;}}lamdba_Array = [];
            for (let i = y+1; i < window.array[x].length; i++){lamdba_Array.push([x,i]); if (window.array[x][i].color == window.deff){for (let k = 0; k < lamdba_Array.length; k++){!arrays[k] ? arrays[k] = [lamdba_Array[k]] : arrays[k].push(lamdba_Array[k]);}; break}if(!window.array[x][i].color){break;}}lamdba_Array = [];
            for (let i = x+1; i < window.array.length; i++){lamdba_Array.push([i,y]); if (window.array[i][y].color == window.deff){for (let k = 0; k < lamdba_Array.length; k++){!arrays[k] ? arrays[k] = [lamdba_Array[k]] : arrays[k].push(lamdba_Array[k]);};break}if(!window.array[i][y].color){break;}}lamdba_Array = [];
            for (let i = x-1; i > 0; i--){lamdba_Array.push([i,y]); if (window.array[i][y].color == window.deff){for (let k = 0; k < lamdba_Array.length; k++){!arrays[k] ? arrays[k] = [lamdba_Array[k]] : arrays[k].push(lamdba_Array[k]);};break}if(!window.array[i][y].color){break;}}lamdba_Array = [];
            i = x-1;j = y-1;while (i >= 0 && j >= 0){lamdba_Array.push([i,j]); if (window.array[i][j].color == window.deff){for (let k = 0; k < lamdba_Array.length; k++){!arrays[k] ? arrays[k] = [lamdba_Array[k]] : arrays[k].push(lamdba_Array[k]);};break}if(!window.array[i][j].color){break;};j--;i--;}lamdba_Array = [];
            i = x+1;j = y-1;while (i  < window.array.length && j >= 0){lamdba_Array.push([i,j]); if (window.array[i][j].color == window.deff){for (let k = 0; k < lamdba_Array.length; k++){!arrays[k] ? arrays[k] = [lamdba_Array[k]] : arrays[k].push(lamdba_Array[k]);};break};if(!window.array[i][j].color){break;}j--;i++}lamdba_Array = [];
            i = x-1;j = y+1;while (i >= 0 && j < window.array[i].length){lamdba_Array.push([i,j]); if (window.array[i][j].color == window.deff){for (let k = 0; k < lamdba_Array.length; k++){!arrays[k] ? arrays[k] = [lamdba_Array[k]] : arrays[k].push(lamdba_Array[k]);};break};if(!window.array[i][j].color){break;}j++;i--}lamdba_Array = [];
            i = x+1;j = y+1;while (i < window.array.length && j < window.array[i].length){lamdba_Array.push([i,j]); if (window.array[i][j].color == window.deff){for (let k = 0; k < lamdba_Array.length; k++){!arrays[k] ? arrays[k] = [lamdba_Array[k]] : arrays[k].push(lamdba_Array[k]);};break};if(!window.array[i][j].color){break;}j++;i++}lamdba_Array = [];
        }
        animation(arrays);
        
    }
}

function Check(x,y){
    if (!window.array[x][y].selected && !window.animation_Var){
    for (let i = 0; i < window.array.length; i++) {
        for (let j = 0; j < window.array[i].length; j++){
            if (window.array[i][j].selected){window.array[i][j].selected = false; document.getElementById(window.array[i][j].id).padding = "2px"}
        }
    }
    if (!window.array[x][y].color && ((x > 0 ? window.array[x-1][y].color == window.canPut : false) || (y > 0 ? window.array[x][y-1].color == window.canPut : false) || (x < window.array.length-1 ? window.array[x+1][y].color == window.canPut : false) || (window.array[x].length-1 > y ? window.array[x][y+1].color == window.canPut : false))){
        for (let i = 0; i < window.array[x].length; i++){if (window.array[x][i].color == deff){window.array[x][y].selected = true;}}
        for (let i = 0; i < window.array.length; i++){if (window.array[i][y].color == deff){window.array[x][y].selected = true;}}
        i = x-1;j = y-1;while (i >= 0 && j >= 0){if (window.array[i][j].color == deff){window.array[x][y].selected = true;};j--;i--;}
        i = x+1;j = y-1;while (i  < window.array.length && j >= 0){if (window.array[i][j].color == deff){window.array[x][y].selected = true;};j--;i++;}
        i = x-1;j = y+1;while (i >= 0 && j < window.array[i].length){if (window.array[i][j].color == deff){window.array[x][y].selected = true;};j++;i--;}
        i = x+1;j = y+1;while (i < window.array.length && j < window.array[i].length){if (window.array[i][j].color == deff){window.array[x][y].selected = true;};j++;i++;}
        console.log(window.array);
    }
    load(window.array);
    }
    return array[x][y].selected;
}

function Move(r, c){
    /*const start = {
        col: document.getElementsByTagName("td")[c],
        row: document.getElementsByTagName("td")[r],
    };
    //console.log(row);
    //console.log(col);
    console.log("Row: " + start.row.className);
    console.log("Col: " + start.col.className);*/
    //console.table(r, c);


    
}
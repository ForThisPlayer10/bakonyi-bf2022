const t = document.getElementById("puzzle")
let table;
let len;
let canPlace = false;



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
    table = new Array(row);
    let startingPosRed = [row/2-1, col/2-1];
    let startingPosBlue = [row/2-1, col/2];
    console.log(startingPosRed);
    console.log(startingPosBlue);
    for (let i = 0; i < col; i++) {
        table[i] = new Array(row);
    }
    t.innerHTML = ""
    for (let i = 0; i < row; i++) {
        let msg = ``;
        msg += `<tr>`
        for (let j = 0; j < col; j++){
            if ((i==startingPosRed[0]&&j==startingPosRed[1]) || (i==startingPosRed[0]+1&&j==startingPosRed[1]+1)) {
                msg += `<td><span class="red" onmouseover="Check(${i}, ${j})" style="height: 30px; width: 30px; background-color: red;border-radius: 50%; display: inline-block;"></span></td>`;
            } else if((i==startingPosBlue[0]&&j==startingPosBlue[1]) || (i==startingPosBlue[0]+1&&j==startingPosBlue[1]-1)) {
                msg += `<td><span class="blue" onmouseover="Check(${i}, ${j})" style="height: 30px; width: 30px; background-color: blue;border-radius: 50%; display: inline-block;"></span></td>`;
            }else{
                msg += `<td><span class="blank" onmouseover="Check(${i}, ${j})" style="height: 30px; width: 30px; background-color: grey;border-radius: 50%; display: inline-block;"></span></td>`;
            }
        }
        msg += `</tr>`;
        t.innerHTML += msg;
    }
    canPlace = true;

}

function Check(r,c){
   let pickableCells = new Array(len);
   for (let i = 0; i < len; i++) {
        pickableCells[i] = new Array(len);
    }
    console.log(r);
    console.log(c);
    //console.table(pickableCells);
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

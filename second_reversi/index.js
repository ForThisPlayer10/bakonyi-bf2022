const timer = document.getElementById("timer");
const nextPlayer = document.getElementById("next");
const t = document.getElementById("puzzle")
let table;
let len;
let canPlace = false;
var array = [];
var canPut = "blue";
var deff = "red";


function CheckInput() {
    let x = document.getElementById("in").value;
    //isNaN(x) ? alert("Számot üss be!") : x%2 ==0 ? alert("Páros számot üss be!") : len=x FillTable(x, x);
    if (isNaN(x)) {
        alert("Számot írj be!");
    } else if (x % 2 != 0) {
        alert("Páros számot írj be")
    } else if (x < 4) {
        alert("Négynél nagyobb számot írj be!")
    } else {
        len = x;
        FillTable(x, x);
    }
    let time = 0;
    setInterval(() => {
        timer.innerHTML = `Time: ${time}`;
        time++;
    }, 1000);
    setNextPlayer("red");
}

const setNextPlayer = (color) => color == "red" ? nextPlayer.innerHTML = "Kovetkezo: piros" : nextPlayer.innerHTML = "Kovetkezo: kek";

function FillTable(row, col) {
    window.array = [];
    for (let i = 0; i < row; i++) {
        window.array.push([]);
        for (let j = 0; j < col; j++) {
            window.array[i].push({
                color: false,
                y: i,
                x: j,
                isItFree: true,
                worth: 0,
                selected: false
            });
        }
    }
    array[len / 2 - 1][len / 2 - 1].color = "red";
    array[len / 2][len / 2].color = "red";
    array[len / 2][len / 2 - 1].color = "blue";
    array[len / 2 - 1][len / 2].color = "blue";
    load(array);
    canPlace = true;
}

function put(x, y) {
    console.log(Check(x, y));
    if (Check(x, y)) {
        let i = x;
        control = false;
        color = new Color(array, x, y);
        if (window.deff == "red") {
            setNextPlayer("blue");
            window.array[x][y] = color.add_Red()
        } else if (window.deff == "blue") {
            setNextPlayer("red");
            window.array[x][y] = color.add_Blue()
        }
        load(window.array);
        lambda = window.canPut;
        window.canPut = window.deff;
        window.deff = lambda;
    }
}

function Check(x, y) {
    if (!window.array[x][y].selected) {
        for (let i = 0; i < window.array.length; i++) {
            for (let j = 0; j < window.array[i].length; j++) {
                if (window.array[i][j].selected) {
                    window.array[i][j].selected = false;
                    document.getElementById(window.array[i][j].id).padding = "2px"
                }
            }
        }
        if (!window.array[x][y].color && ((x > 0 ? window.array[x - 1][y].color == window.canPut : false) || (y > 0 ? window.array[x][y - 1].color == window.canPut : false) || (x < window.array.length - 1 ? window.array[x + 1][y].color == window.canPut : false) || (window.array[x].length - 1 > y ? window.array[x][y + 1].color == window.canPut : false))) {
            for (let i = 0; i < window.array[x].length; i++) {
                if (window.array[x][i].color == deff) {
                    window.array[x][y].selected = true;
                }
            }
            for (let i = 0; i < window.array.length; i++) {
                if (window.array[i][y].color == deff) {
                    window.array[x][y].selected = true;
                }
            }
            for (let i = x; i < window.array.length; i++) {
                for (let k = y; k < window.array[i].length; k++) {
                    if (window.array[i][k].color == deff) {
                        window.array[x][y].selected = true;
                    }
                }
            }
            for (let i = x; i > 0; i--) {
                for (let k = y; k > 0; k--) {
                    if (window.array[i][k].color == deff) {
                        window.array[x][y].selected = true;
                    }
                }
            }
            for (let i = x; i < window.array.length; i++) {
                for (let k = y; k > 0; k--) {
                    if (window.array[i][k].color == deff) {
                        window.array[x][y].selected = true;
                    }
                }
            }
            for (let i = x; i > 0; i--) {
                for (let k = y; k < window.array[i].length; k++) {
                    if (window.array[i][k].color == deff) {
                        window.array[x][y].selected = true;
                    }
                }
            }
        } //lerakas
        load(window.array);
    }
    return array[x][y].selected;
}

function Move(r, c) {
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
var amount;
function generate(am){
    document.getElementById("players-first").innerHTML = "";
    document.getElementById("container").innerHTML = "";
    amount = am
    if (am == 16) {
        for (let i = 0; i < 5; i++) {
            document.getElementById("container").innerHTML += `<section id="round${i}">`
        }
        for (let i = 0; i < am; i++) {
            document.getElementById("round0").innerHTML += `<div onclick="playMatch(${i})" id = "${i}">Versenyző ${i+1}</div>`;
        }
        for (let i = 0; i < am/2; i++) {
            document.getElementById("round1").innerHTML += `<div onclick="playMatch(${i})" id = "${i + am}"></div>`;
        }
        for (let i = 0; i < am/4; i++) {
            document.getElementById("round2").innerHTML += `<div onclick="playMatch(${i})" id = "${i + am+am/2}"></div>`;
        }
        for (let i = 0; i < am/8; i++) {
            document.getElementById("round3").innerHTML += `<div onclick="playMatch(${i})" id = "${i+am+am/2+am/4}"></div>`;
        }
    }
}

function playMatch(i) {
    const element = document.getElementById(i);
    const winner = random(1, 10);
    if (winner > 5) {
        if(i%2 == 0){
            document.getElementById(amount+i-1).innerHTML = element.innerHTML;
        }
    }else{
        if(i%2 != 0){
            document.getElementById(amount+i-1).innerHTML = document.getElementById(i-1).innerHTML;
        }
    }
}
    
    
    




function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
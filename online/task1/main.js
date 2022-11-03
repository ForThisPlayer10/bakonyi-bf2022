var numbers = [];

function add_Number(){
    number = Number(document.getElementById("number").value);
    if (number){
        document.getElementById("number").value = "";
    }
    number ? numbers.push(number) : write_Numbers();
}

function write_Numbers(){
    document.getElementById("conteiner").innerHTML = "";
    let json_Control = {};
    for (let i = 0; i < window.numbers.length; i++){
        json_Control[window.numbers[i]] ? json_Control[window.numbers[i]]++ : json_Control[window.numbers[i]] = 1;
    }   
    let result = [];
    for (let i = 0; i < Object.keys(json_Control).length; i++){
        if (json_Control[Object.keys(json_Control)[i]]  == 1){
            result.push(Object.keys(json_Control)[i]);
            document.getElementById("conteiner").innerHTML += ` ${Object.keys(json_Control)[i]}, `;
        }
    }
}
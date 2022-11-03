window.onload = ()=>{
    let primes = [];
    let twin_Primes = [];
    for (let i = 2; i <= 1000;i++){
        let control = true;
        for (let j = 0; j < primes.length; j++){
            !(i%primes[j]) ? control = false : false;
        }
        if (control){
            primes.length >= 2 ? i-primes[primes.length-1] == 2 ? twin_Primes.push([i,primes[primes.length-1]]) : false : false;
            primes.push(i);
        }
    }
    for (let i = 0; i < twin_Primes.length; i++){
        document.getElementById("conteiner").innerHTML += `(${twin_Primes[i][1]},${twin_Primes[i][0]}),`;
    }
};
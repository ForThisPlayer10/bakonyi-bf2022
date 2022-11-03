const small = document.getElementById("small");
const big = document.getElementById("big");
const convert = (direction) => {
    if(direction == "right") small.value = convertFromLong(big.value);
    else if(direction == "left") big.value = convertFromSmall(small.value);
}

var convertFromLong = (address) => {
    let already0 = false;
    address = address.replace(/0000/g, x => {if(!already0) return ""}).replace(/::/g, ":");
    let retArray = [];
    address.split(":").forEach(x => {
        retArray.push(x.replace(/^0+/, ''));
    })
    return retArray.join(":");
}

var convertFromSmall = (address) => {
    if(address.length == 39) return address;
    else if((address.match(/:/g) || []).length == 7){
        let retArray = [];
        address = address.split(":").forEach(x => {
            while(x.length != 4) x = "0" + x;
            retArray.push(x);
        })
        return retArray.join(":");
    }
    else if((address.match(/:/g) || []).length < 7){
        let retString = address.replace(/::/g, x => {
            return ":0000".repeat((8 - (address.match(/:/g) || []).length));
        });
        let retArrayl = [];
        retString.split(":").forEach(x => {
            if(x.length > 4) {
                retArrayl.push(x.slice(0, 4));
                retArrayl.push(x.slice(4));
            }else retArrayl.push(x);
        });
        let retArray = [];
        retArrayl.forEach(x => {
            while(x.length != 4) x = "0" + x;
            retArray.push(x);
        })
        return retArray.join(":");
    }
}
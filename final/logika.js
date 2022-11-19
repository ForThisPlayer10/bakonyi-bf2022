class logic_Operators{
        constructor(name, value){
        let obj = {
            "NOT" : this.not,
            "AND" : this.and,
            "OR" : this.or,
            "EQ" : this.eq,
            "NEQ" : this.neq,
            "COMP" : this.comp,
            "MIN" : this.min,
            "MAX" : this.max,
            "MIN" : this.min
        }
        name ? obj[name](value) : false;
    }
    static not(x){
        return 1-x;
    }
    static and(list){
        let result = -1;
        for (let i = 0; i < list.length; i++){
            result == -1 ? result = list[i] : list[i] * result;
        }
        return result;
    }
    static eq (p1, p2) {
        return p1==p2 ? 1 : 0;
    }
    static neq (p1, p2) {
        return p1==p2 ? 0 : 1;
    }
    static comp (p1, p2) {
        return p1 < p2 ? 1 : 0;
    }
    static min (arr) {
        let min = arr[1];
        arr.forEach(x => {if(x < min) min = x});
        return min;
    }
    static max (arr) {
        let max = arr[1];
        arr.forEach(x => {if(x > max) max = x});
        return max;
    }
    static or(list){let control = 0;for (let i = 0; i < list.length; i++){list[i] == 1 ? control = 1 : 0;}return control;}
    static nor(arr){
        let ret = 1;
        arr.forEach(x=>{
            if(x == 1) ret = 0;
        })
        return ret;
    }
    static nand(arr) {
        var ret = 0;
        arr.forEach(x => {
            if(x == 0) ret = 1;
        })
        return ret;
    }
    static pass (p1, p2) {
        return p1 == 0 ? 0 : p2;
    }
}


const boolean = (x) => x == 0 ? 0 : 1;



const getValues = (values, type) =>{
    boolean_Valeus = [];
    for (let i = 0; i < values.length; i++){
        boolean_Valeus.push(boolean(values[i]));
    }
    return boolean_Valeus;

}

console.log(logic_Operators.pass(0, 10));
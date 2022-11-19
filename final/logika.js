class logic_Operators{
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
    static or(list){
        let control = 0;
        for (let i = 0; i < list.length; i++){
            list[i] == 1 ? control = 1 : 0;
        }
        return control;
    }
}


const boolean = (x)=> x == 0 ? 0 : 1;



const getValues = (values, type) =>{
    boolean_Valeus = [];
    for (let i = 0; i < values.length; i++){
        boolean_Valeus.push(boolean(values[i]));
    }
    return logic_Operators.or(boolean_Valeus);

}

console.log(getValues([0,0,0,0,0,0,0]));
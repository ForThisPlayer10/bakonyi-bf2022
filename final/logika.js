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
}


const boolean = (x)=> x == 0 ? 0 : 1;



const getValues = (values, type) =>{
    boolean_Valeus = [];
    for (let i = 0; i < values.length; i++){
        boolean_Valeus.push(boolean(values[i]));
    }
    return boolean_Valeus;

}

console.log(getValues([0,12,210,21,10,1,0]));
function pow(a,b){
    let sum = a;
    for(let i = 1; i < b; ++i){
        let aux = sum;
        for(let j = 1; j < a; ++j){
            sum += aux;
        }
    }
    return sum;
};

console.log(pow(2,8));

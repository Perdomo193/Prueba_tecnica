function number(len = 100){
    
    var v = [];

    for (var i = 0; i < len; ++i){
        let min = 0;
        let max = 10000;
        
        function getRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
        }
        num = getRandomArbitrary(min, max);
        num = Math.round(num);
        
        v[i] = num;
    }
    return v.sort(function(a,b) {
        return b-a;
    })
    
}

console.log(number(100));
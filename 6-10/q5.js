const fact = ( (n) => {
    let answer = 1;
    if (n === 0 || n === 1){
        return answer;
    }
    else if(n > 1){
        for(var i = n; i >= 1; i--){
            answer = answer * i;
        }
        return answer;
    }
    else{
        console.log(`Invalid number h bhai`);
    }
} )

console.log(fact(4))

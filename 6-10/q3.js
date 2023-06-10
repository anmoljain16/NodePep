const input = [12, 46, 32, 64];

function mean(arr){
    const l = arr.length;

    var total = 0;

    arr.map( (num) => {
        total = total +num;
    } )

    return total/l;
}

function median(values){

    values.sort(function(a,b){
        return a-b;
    });

    var half = Math.floor(values.length / 2);

    if (values.length % 2)
        return values[half];

    return (values[half - 1] + values[half]) / 2.0;
}
console.log(`Mean = ${mean(input)}`);
console.log(`Median = ${median(input)}`);


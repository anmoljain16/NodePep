const input = [12, 46, 32, 64];

const l = input.length;

var total = 0;

input.map( (num) => {
    total = total +num;
} )

console.log(`Mean = ${total/l}`);

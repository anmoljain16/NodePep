const input = [12, 46, 32, 64];

const l = input.length;

var total = 0;

input.filter( (num) => {
        return num >0;
    }

).map( (num) => {
    total = total +num;
} )

console.log(`Mean = ${total/l}`);


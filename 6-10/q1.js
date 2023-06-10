const input = [1, -4, 12, 0, -3, 29, -150];
var total = 0;

input.filter( (num) => {
        return num >0;
    }

).map( (num) => {
    total = total +num;
} )

console.log(total);

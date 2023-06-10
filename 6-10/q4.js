const input = [
    {
        name: "John",
        age: 13,
    },
    {
        name: "Mark",
        age: 56,
    },
    {
        name: "Rachel",
        age: 45,
    },
    {
        name: "Nate",
        age: 67,
    },
    {
        name: "Jennifer",
        age: 65,
    },
];

let youngest = input[0].age;
let eldest = input[0].age;

input.map( (value) =>{
    if(value.age>eldest){
        eldest = value.age;
    }
    else if(value.age<youngest){
        youngest = value.age;
    }
} )


console.log(`Youngest - ${youngest} \n Eldest - ${eldest}`);

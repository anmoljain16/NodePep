const products = [
    { name: "Product 1", price: 20, category: "Electronics" },
    { name: "Product 2", price: 30, category: "Clothes" },
    { name: "Product 3", price: 40, category: "Electronics" },
    { name: "Product 4", price: 50, category: "Clothes" },
    { name: "Product 5", price: 60, category: "Clothes" },
    { name: "Product 6", price: 70, category: "Electronics" },
    { name: "Product 7", price: 80, category: "Clothes" },
    { name: "Product 8", price: 90, category: "Electronics" },
];

const fun = ( (product) => {

    let clothTotal = 0;

    let eleTotal = 0;

    const eleArr =[];
    const clothArr = []

    product.map( (value) => {
        let obj;
        if(value.category === "Electronics"){
            // eleCount += 1;
            eleTotal = eleTotal + value. price;
            obj = {
                name: value.name,
                price: value.price,
                category: value.category
            };
            eleArr.push(obj)
        }else {
            // clothCount += 1;
            clothTotal = clothTotal +value.price;
            obj = {
                name: value.name,
                price: value.price,
                category: value.category
            };
            clothArr.push(obj)
        }
    } )

    const avgCloth = clothTotal/clothArr.length;
    const avgEle = eleTotal/eleArr.length;


    if(avgCloth > 50 ){
        console.log(clothArr)
    }

    if(avgEle > 50){
        console.log(eleArr)
    }
} )

fun(products)

const products = [
    {name:"Laptop",price:23000,quantity:1},
    {name:"shirt",price:500,quantity:6},
    {name:"watch",price:2000,quantity:3},
    {name:"pant",price:699,quantity:4}
];

let cartTotal = 0;

for(const product of products){
    let productPrice = product.price * product.quantity;
    cartTotal += productPrice;
}

console.log(cartTotal);
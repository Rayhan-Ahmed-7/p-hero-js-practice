const phones = [
    {name:"realme",price:20000,ram:"4gb",rom:"64gb",color:"gold"},
    {name:"vivo",price:14000,ram:"4gb",rom:"64gb",color:"gold"},
    {name:"poco",price:34000,ram:"6gb",rom:"128gb",color:"gold"},
    {name:"wallton",price:12000,ram:"4gb",rom:"32gb",color:"gold"},
    {name:"samsung",price:44000,ram:"8gb",rom:"128gb",color:"gold"}
];

let cehepest = phones[0];

for(const phone of phones){
    if(phone.price < cehepest.price){
        cehepest = phone;
    }
}

console.log(cehepest);
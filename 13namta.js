let namta = 13;
let num = 1;
// while(num<=10){
//     console.log(namta + "x" + num + "=" + namta*num);
//     num++;
// }

function expo(num){
    return console.log(num**2);
}
//expo(10);
//press ctrl alt m for stoping code runing
while(num<10){
    console.log(num);
    if(num==6){
        break;
    }
    // console.log(num);
    num++;
}

// let numbs = [23,43,22,53,342,67,26,223,];
// for(i=0;i<numbs.length; i++){
//     var numd = numbs[i];
//     if(numbs[i]>100){
//         continue;
//     }
//     console.log(numd);
// }
// var mahiya ={
//     mahi: "hate"
// };
// console.log(mahiya);
// mahiya["mahi"] = 'agnee2';
// console.log(mahiya);
// mahiya.mahi="love";
// console.log(mahiya);
function addNumber(number1, number2) {
    return "Result is " + number1 + number2;
   }
   
var result = addNumber(5, 4);


function milesToKilo(miles){
    let killo = miles * 1.60934;
    return killo;
}

console.log(milesToKilo(20));

function oddEvenChecker(num){
    if(num % 2 == 0){
        console.log(num + " this is a even number");
    }
    if(num % 2 == 1){
        console.log(num + " this is a odd number");
    }
}

oddEvenChecker(123);

//factorial
// let factorial = 1;
// for(i = 1; i <= 5; i++){
//     factorial = factorial * i;
// }
// console.log(factorial);

let factorial = 1;
let i = 1;
while(i <= 5){
    factorial = factorial * i;
    i++;
}
console.log(factorial);

function fact(num){
    let factorial = 1;
for(i = num; i >= 1; i--){
    factorial = factorial * i;
}
return factorial;
}

console.log(fact(5));

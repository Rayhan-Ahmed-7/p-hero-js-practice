// let userNumber = parseInt(prompt('enter your number'));
// console.log(userNumber);
const students = [
    {
        name:"Alya",
        num:95
    },
    {
        name:"Dalya",
        num:66
    },
    {
        name:"Salya",
        num:80
    },
    {
        name:"Malya",
        num:59
    },
    {
        name:"Lilya",
        num:47
    },
    {
        name:"Jwalya",
        num:77
    }
]
for(x of students){
    //console.log(x);
    if(x.num >= 90 && x.num<=100){
        console.log(`${x.name}s Grade is A+`);
    }
    else if(x.num >= 80 && x.num<=89){
        console.log(`${x.name}s Grade is A`);
    }
    else if(x.num >= 70 && x.num<=79){
        console.log(`${x.name}s Grade is B`);
    }
    else if(x.num >= 60 && x.num<=69){
        console.log(`${x.name}s Grade is C`);
    }
    else if(x.num >= 50 && x.num<=59){
        console.log(`${x.name}s Grade is D`);
    }
}

//const grade = () =>{
//     if(userNumber >= 90 && userNumber<=100){
//         console.log(`Your Grade is A+`);
//     }
//     if(userNumber >= 80 && userNumber<=89){
//         console.log(`Your Grade is A`);
//     }
//     if(userNumber >= 70 && userNumber<=79){
//         console.log(`Your Grade is B`);
//     }
//     if(userNumber >= 60 && userNumber<=69){
//         console.log(`Your Grade is C`);
//     }
//     if(userNumber >= 50 && userNumber<=59){
//         console.log(`Your Grade is D`);
//     }
// }
// grade();
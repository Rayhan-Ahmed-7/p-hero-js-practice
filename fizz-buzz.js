function fizzBuzz(num){
    for(i=1; i<=num; i++){
        if(i%3 == 0 && i%5 == 0){
            console.log("fizzbuzz");
        }
        else if(i%3 == 0){
            console.log("Fizz");
        }
        else if(i%5 == 0){
            console.log("Buzz");
        }
        else{
            console.log(i);
        }
    }
}

console.log(fizzBuzz(20));
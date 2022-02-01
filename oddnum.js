function oddNum(firstInput,secondInput){
    if(firstInput > secondInput){
        let thirdnum = firstInput - secondInput;
        firstInput = firstInput - thirdnum;
        secondInput = secondInput + thirdnum;
        console.log(firstInput,secondInput);
    }
    let oddArray = [];
    for(i = firstInput; i <= secondInput; i++){
        if(i % 2 == 1){
            oddArray.push(i);
            console.log(`${i} this is an odd number`);
        }
    }
    console.log("There are " + oddArray.length + " odd numbers between the numbers " + firstInput + " to " + secondInput);
}

oddNum(80,50);
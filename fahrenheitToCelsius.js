const fahrenheitToCelsius = (f) =>{
    let celsius = (f-32) * 5/9;
    return celsius.toFixed(2);
}

const CelsiusToFahrenheit = (c) =>{
    let fahrenheit = (c * 9/5) + 32;
    return fahrenheit.toFixed(2);
}

console.log(fahrenheitToCelsius(98.6));
console.log(CelsiusToFahrenheit(37));

//largest number of array

const arr = [23,54,76,24,150,87,21,100];

function largestNumber(){
    let i = 0;
    let lg;
    let clg;
    while(i < arr.length){
        if(arr[i] > arr[i+1] || arr[i] > clg){
            lg = arr[i];
            if(clg>lg){
                clg = arr[i];
            }
            clg = lg;
        }
        i++;
    }
    return clg;
}
console.log(largestNumber());
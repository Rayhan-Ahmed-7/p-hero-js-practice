function BinIntInArray(arr){
    let largest = arr[0];
    for(i=0; i<arr.length; i++){
        if(arr[i]>largest){
            largest = arr[i];
        }
    }
    console.log(largest);
}

const ages = [23,12,43,23,67,34,100];
const ages2 = [-2,-5,-4,-1];

BinIntInArray(ages);
BinIntInArray(ages2);

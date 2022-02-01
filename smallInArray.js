function smallIntInArray(arr){
    let small = arr[0];
    for(i=0; i<arr.length; i++){
        if(arr[i]<small){
            small = arr[i];
        }
    }
    console.log(small);
}

const ages = [23,12,43,23,67,34,100];
const ages2 = [-2,-5,-4,-1];

smallIntInArray(ages);
smallIntInArray(ages2);
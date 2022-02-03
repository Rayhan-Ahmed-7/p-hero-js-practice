function removeDuplicates(arr){
    const newArray = [];
    for(i=0; i<arr.length; i++){
        if(newArray.indexOf(arr[i]) == -1){
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

const arr = [2,53,32,54,2,53,6,7,7];

console.log(removeDuplicates(arr));


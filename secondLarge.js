// function secondLargeInArray(arr){
//     let largest = arr[0];
//     const laToSm = [arr[0]];
//     for(i=0; i<arr.length; i++){
//         if((arr[i] - largest) == 0){
//             laToSm.unshift(arr[i]);
//             largest = arr[i];
//         }
//         else if((arr[i] - largest) > 0){
//             laToSm.unshift(arr[i]);
//             largest = arr[i];
//         }
//         else if((arr[i] - largest) < 0){
//             laToSm.push(arr[i]);
            
//         }
//     }
//     console.log(laToSm);
// }

// const numbers = [4,2,5,72,12,54,21];

// secondLargeInArray(numbers);
function bubbleSort(array) {
    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < array.length; i += 1) {
        if (array[i - 1] > array[i]) {
          done = false;
          var tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }
  
    return array;
  }
  
  var numbers = [12, 10, 15, 11, 14, 13, 16];
  bubbleSort(numbers);
  console.log(numbers);
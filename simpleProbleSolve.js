//1. Feet to inch using function.

function feetToInch(feet){
    return feet * 12;
}
console.log(feetToInch(5));

//2. centimeter to meter using function.

function centimeterTometer(cm){
    return cm * .01;
}
console.log(centimeterTometer(100));

//3. How many page you will need for your books
/*
1. 3 parameter 3 books
2. first book 100 page.
3. second book 200 page.
4. 3rd book 300 page.
*/

function requiredPages(book1,book2,book3){
    const book1Page = 100;
    const book2Page = 200;
    const book3Page = 300;
    let totalPage = 0;
    let firstBookTotalPage = book1Page * book1;
    let secondBookTotalPage = book2Page * book2;
    let thirdBookTotalPage = book3Page * book3;
    totalPage = firstBookTotalPage + secondBookTotalPage + thirdBookTotalPage;
    return  "Total Page " + totalPage;
}
console.log(requiredPages(20,40,45));

//4. bestFriend write a function that takes array of friends and return the short name of the array.

const bestFriends = ["rayhan Ahmed","sakil","faysal","alu","kodu"];

function bestFriend(arr){
    let bestDude = arr[0];
    for(const element of arr){
        if(element < bestDude){
            bestDude = element;
        }
    }
    return bestDude;
}

console.log(bestFriend(bestFriends));

//5. write a function that takes array of numbers and then run a loop inside that function and that loop only execute positive number whenever it founds a negetive number instantly breaks and returns all the positive number
const mixArray = [2,4,6,2,7,-4,-6,8,3];

function onlyPositive(arr){
    const positiveNumber = [];
    for(i=0;i<arr.length;i++){
        if(arr[i]>0){
            positiveNumber.push(arr[i]);
        }
        else{
            break;
        }
    }
    return positiveNumber;
}

console.log(onlyPositive(mixArray));
//0.write something using comment.

//1. write 3 variable (number,string,boolean).
let num = 12;
let str = "Rayhan";
let bool = true;

//2. 2 variables with (let and const).
let name = "Rayhan";//you can reassign, have a block scope, can't redeclare.
const roll = 12;//can't reassign, have a block scope, can't redeclare.

//3. simple Math operations +,-,*,/,% etc.
console.log(12 + 2);
console.log(12 - 2);
console.log(12 * 2);
console.log(12 / 2);
console.log(12 % 2);

//4. Big>,Small<,big or equal >=, small or equal <=, equal ==, not equal !=.
let num1 = 10;
let num2 = 5;

let big = (num1 > num2) ? `${num1} is big`:`num2 is small`;
console.log(big);
let small = (num1 < num2) ? `${num1} is big`:`num2 is small`;
console.log(small);
let bigOrEqual = (num1 >= num2) ? `${num1} is big`:`num2 is small`;
console.log(bigOrEqual);
let equalOrSmall = (num1 <= num2) ? `${num1} is big`:`num2 is small`;
console.log(equalOrSmall);
let equal = (num1 == num2) ? `number are equal`:`not equal`;
console.log(equal);
let notEqual = (num1 != num2) ? `not equal is true`:`equal is false`;
console.log(notEqual);

//5. two condition = 1. fullfill both conditions. 2. fullfill atleast one condition. && or ||;

const bothCondition = (5 > 6 && 5 < 6) ? "successfull" : "fail";
console.log(bothCondition);
const oneCondition = (5 == 6 || 5 < 6) ? "one true" : "both are false";
console.log(oneCondition); 


//6. use if-else;
if(6 < 5){
    console.log("5 is small");
}else{
    console.log("5 is not small");
}

//7. Display odd numbers between 7 to 19 using while loop.

let i = 7;
while(i <= 19){
    if(i % 2 !== 0){
        console.log("odd ",i);
    }
    i++;
}

//8. Declare an array.Get the number of elements in array. update the 4th position element of the array. Add or remove elements from array. check whether a value exist in a array or not.?

const array = [2,4,2,53,25,5,3];

console.log(array.length);
array[3] = 6;
console.log("after update",array);
array.push(7);
console.log("after push",array);
array.pop();
console.log("after pop",array);
let index = array.indexOf(7);
console.log("7 existence",index);

//9. use any for loop to see all array elements

for(const element of array){
    console.log(element);
}

//10. Display only the number that are biger than 80 from an array.

const numbersOfArray = [23,98,45,123,34,24,876];
const arrayOfBigerThan80 = [];
for(const number of numbersOfArray){
    if(number > 80){
        arrayOfBigerThan80.push(number);
    }
}
console.log(arrayOfBigerThan80);

//11. write a function that takes 3 arguments and than returns the multification of the 3 arguments.

function multificationOf3(num1,num2,num3){
    return num1*num2*num3;
}
console.log(multificationOf3(2,2,2));

//12. Declare an object and change a property of that object.

const car = {
    name:"BMW",
    color:"Black",
    price:"1core",
    wheel:4
}
car.wheel = 5;
console.log(car);
car["wheel"] = 4;
console.log(car);
//in first 10 mile of jungle each mile we will see 10 animal
//in first 10-20 mile of jungle each mile we will see 50 animal
//in first 20-n mile of jungle each mile we will see 100 animal

function countAnimal(miles){
    let first10MileAnimals = 10;
    let second10MileAnimals = 50;
    let restMilesAnimals = 100;
    let animals = 0;
    if(miles <= 10){
        animals = miles * first10MileAnimals;
    }
    else if(miles > 10 && miles <= 20){
        animals += 10 * first10MileAnimals;
        miles = miles - 10;
        animals += miles * second10MileAnimals;
    }
    else if(miles > 20){
        animals += 10 * first10MileAnimals;
        animals += 10 * second10MileAnimals;
        miles = miles-20;
        animals += miles * restMilesAnimals;
    }
    return animals;
}

console.log(countAnimal(6));
console.log(countAnimal(15));
console.log(countAnimal(25));
/*
function fibonacci(num){
    const fibo = [0];
    let first, sec, next;
    first = 0;
    sec = 1;
    next = first + sec;
    for(let i=0; i < num; i++){
        first = sec;
        sec = next;
        next = first + sec;
        fibo.push(first);
    }
    console.log(fibo);
}
*/
function fibonacci(num){
    const fibo = [0,1];
    for(let i=2; i <= num; i++){
       fibo[i] = fibo[i-1] + fibo[i-2];
    }
    console.log(fibo);
}

fibonacci(10);

const number = -78;
console.log(Math.abs(number));
function add(a, b){
    return a + b;
  }
  console.log(add("adam" + "eve"))
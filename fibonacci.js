function fibonacci(num){
    const fibo = [0];
    let first, sec, next;
    first = 0;
    sec = 1;
    for(i=0; i<num.length; i++){
        first = sec;
        next = first + sec;
        sec = next;
        fibo.push(next);
    }
    console.log(fibo);
}

fibonacci(6);
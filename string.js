function stringReverse(st){
    let string = "";
    for(element of st){
        string = element + string;
    }
    return string;
}

console.log(stringReverse("wassaup polapain.?"));
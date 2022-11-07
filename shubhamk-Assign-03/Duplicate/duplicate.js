function duplicate(Array,item){
    for(i=0;i<=Array.length-1;i++){
        if(Array[i]===item){
        return "Found At Loc :: "+i;
    }
}
return "Not Found";
}
let Array=[5,6,4,12,9,22,32]
let item=32;
result=duplicate(Array,item);
console.log( result)
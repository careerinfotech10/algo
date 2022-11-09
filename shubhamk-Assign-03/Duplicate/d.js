
function fun(array,item){
        let i=0;
        while(i<=array.length-1){   
        if(array[i]===item){
        return "Found At Loc :: "+i;
    }i++;
}
return "Not Found";
}
let array=[5,6,4,12,9,22,32]
let result=fun(array,32)
console.log(result)

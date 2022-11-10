//find the duplicate no. and its occurance

let array=[1,2,3,4,3,2,6];
let result={};
for(let i=0;i<array.length;i++){
    let count=0;
for(let j=0;j<array.length;j++){
    if(array[i]===array[j]){
        count++;
        if(count>1){
            result[array[i]]=count;
        }

    }
}    
}
for(a in result) {
console.log(a,result[a])
}
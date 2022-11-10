//find duplicate number 8

function findduplicate(array){

    for(let i=0;i<array.length-1;i++){
    for(let j=0;j<array.length-1;j++){

       
     if(array[i]===array[j])
console.log(array[i])
     }
    }   
    
    
}
let number=[1,9,9,8,7,8,3,6];
findduplicate(number);

function bubblesort(array){
for(let i=0; i< array.length-1; i++){
    let currentvalue=array[i];
    let j;
    for(j=i-1; j>=0 && array[j]>currentvalue; j--){
        array[j+1]=array[j];
    }
    array[j+1]=currentvalue;
}

return array;
}
//array=[35, 9, 10, 32, 23, 11, 70, 35, 45,100, 90, 110]
console.log(bubblesort([35, 9, 10, 32, 23, 11, 70, 35, 45,100, 90, 110]));


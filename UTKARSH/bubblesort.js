function bubblesort(array){
 
do{
    swapped=false;
    for(let i=0; i<array.length-1; i++){
        if(array[i]>array[i+1]){
            swapped=true

            temp=array[i]
            array[i]=array[i+1]
            array[i+1]=temp
        }
    
    }
    
    
    
}while(swapped)
    
    }
    array=[45, 9, 10, 32, 23, 11, 70, 35, 45,100, 90, 110]
    bubblesort(array)
    console.log(array);
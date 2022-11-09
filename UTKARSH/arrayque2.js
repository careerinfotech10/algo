array=[10 , 8 , 77 , 66, 55, 8 , 8]
// Que.1 ) find duplicate number .
// Que.2 ) find t he duplicate number and its occurance.

// we have to use loop here

let count=1;

for (let i=0 ; i<7 ; i++){

for(let j=1; j<7 ; j++){

    if(array[j]===array[i])
   console.log(array[j] , count)
   count++;
}

}

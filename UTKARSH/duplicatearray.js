function countDuplicates(array) {
    const counts = {};
    for (let i = 0; i < array.length; i++) {
     let element = array[i];
      counts[element] = (counts[element] || 0) + 1;
      // ( 0 || 0) this will provide zero value that is 0; but ( 1 || 0) this will provide answere of 1;
      // 0 is used to represent false , and 1 is used to represent true
    }
    return counts;
  }
  
  const array = [10 , 8 , 77 , 66, 55, 8 , 8];
  console.log(countDuplicates(array));

  // programme:
 /* STEP 1: START 
  step 2: input counts 
   step 3: input array
  STEP 4: initialize i=0;(input)
  STEP 5: condition i<array.length (decision)
  step 6: input element , element=array[i];
  step 7 : function return return counts (output)
  */
  
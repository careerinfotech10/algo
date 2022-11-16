// find out duplicate string or number and its occurance.
function duplicate(str){
    
reversestr='';
for(let i=str.length-1; i>=0 ; i--){
  
    reversestr=reversestr+str[i];
    let element = str[i];
     reversestr[element] = (reversestr[element] || 0) + 1;
}

return reversestr;

}
duplicate("university");
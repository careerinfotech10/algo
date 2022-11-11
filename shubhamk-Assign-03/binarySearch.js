function binary(array,item){
    left=0;
    right=array.length-1;
    while(left<=right){
        mid = Math.floor((left+right)/2)
        if(array[mid]===item){
            return "Found At location : " +mid;
        }
        if(array[mid]<=item){
            left=mid+1;
        }
        else{
            right=mid-1
        } 
       
    }
    return "Not Found";
}
array=[2,9,5,6,7,8,12,3,25,36,12];
let item=121;
let result=binary(array,item)
console.log(result)
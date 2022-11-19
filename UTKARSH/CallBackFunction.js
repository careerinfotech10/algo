/* when we passed a function as a parameter then it is called 
as a call back function.*/
function fun(a,b){
console.log(a*b)
}
fun(12,5);
// above is by using normal function but if we want to use call back function then
// we have to passed function fun as a parameter in some another function

function callbackexample(){
console.log("utkarsh , thats my name")
}
callbackexample(fun);
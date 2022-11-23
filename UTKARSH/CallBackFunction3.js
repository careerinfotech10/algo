// higher order function
/*function calculator(a , b , myfun){

    myfun(a, b)
}
function addition(i , j){
console.log("addition of two number is :" + parseInt(i+j))
}

function sub(i, j){
    console.log("subtraction of two number is :" + parseInt(i-j))
}

function mult(i,j){
    console.log("Multiplication of two number is :" + parseInt(i*j))
}

function div(i,j){
    console.log("Division of two number is :" + parseInt(i/j))
}
calculator(9, 3, addition);
calculator(9, 3 , sub);
calculator(9, 3, mult);
calculator(9, 3, div); */

function calculator(a,b,c){
    c(a,b)
}
function add(x,y){
    console.log("addition of two number is : "+ parseInt(x+y));
}
function division(x,y){
    console.log("division of two number is : "+ parseInt(x/y));
}
calculator(3, 4 , add);
calculator(9, 3, division);
// closure scope  : a function after the closure still persists its state 

let a;
function add(){
    a=20;
    console.log(a)
}
add();
// now function is over .
console.log(" after execution of function : " + a );
// still console.log will give output 
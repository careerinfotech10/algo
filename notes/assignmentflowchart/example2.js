//Q.Design a flowchart for finding the largest among three numbers entered by user.

let a=prompt("enter first number")
let b=prompt("enter second number")
let c=prompt("enter third number")
if(a>b){
    document.write("A is the largest number")
}
 else if(b>c){
    document.write("B is the largest number")
 }
 else if(a>c){
    document.write("A is the largest number")
 }
 else{
   document.write("C is the largest number ")
 }
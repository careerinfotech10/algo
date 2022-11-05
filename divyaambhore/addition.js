//Design flowchart for adding two number enterd by the user

let num1;
let num2;
function addition()
{ 
num1=document.getElementById("num1").value;
num2=document.getElementById("num2").value;
let sum=parseInt(num1)+parseInt(num2);
document.getElementById("answer").value=sum;

}

function multi(){
    let num1=parseInt(document.getElementById("num1").value);
    let num2=parseInt(document.getElementById("num2").value);
    let num3=parseInt(document.getElementById("num3").value);
    let multipliation=num1*num2*num3;
    document.getElementById("result").innerHTML="Multiplication of three numbers is : "+multipliation;
}
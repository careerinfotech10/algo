function average(){
    let num1=parseInt(document.getElementById("num1").value);
    let num2=parseInt(document.getElementById("num2").value);
    let total=num1+num2;
    let avg=total/2;
    document.getElementById("result").innerHTML="The Average of two numbers" + num1 +"and" +num2+"is :" +avg;
}
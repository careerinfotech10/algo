function avgoffive()
{
    let num1=parseInt(document.getElementById("num1").value);
    let num2=parseInt(document.getElementById("num2").value);
    let num3=parseInt(document.getElementById("num3").value);
    let num4=parseInt(document.getElementById("num4").value);
    let num5=parseInt(document.getElementById("num5").value);
    let total=num1+num2+num3+num4+num5;
    let average=total/5;
    document.getElementById("result").innerHTML="Average of 5 subjets is : "+average;
}
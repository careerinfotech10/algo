
function largest_no(){
    let num1= parseInt(document.getElementById("num1").value);
    let num2=parseInt(document.getElementById("num2").value);
    let num3=parseInt(document.getElementById("num3").value);
    if(num1>num2 && num1>num3)
    {
        document.getElementById("result").innerHTML="Largest no is:"+num1;
    }
    else if(num2>num1 && num2>num3)
    {
        document.getElementById("result").innerHTML="Largest no is:"+num2;
    }
    else{
        document.getElementById("result").innerHTML="Largest no is:"+num3;
    }
}
function posneg()
{
    let num=parseInt(document.getElementById("num").value);
    if(num>0)
    {
        document.getElementById("result").innerHTML="Number " +num +" is positive";
    }
    else {
        document.getElementById("result").innerHTML="Number " +num +" is negative";
    }
}
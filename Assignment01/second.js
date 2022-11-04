function addition(){
    let a=document.getElementById("num1").value;
    let b=document.getElementById("num2").value;
    let c=document.getElementById("num3").value;
    if(a>b && a>c){
        document.write("Greatest number is A")
    }
    else if(b>a && b>c){
        document.write("Greatest number is B")
    }
    else{
        document.write("Greatest number is C")
    }
}

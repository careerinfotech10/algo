function addition(){
    let SP=document.getElementById("num1").value;
    let CP=document.getElementById("num2").value;
    if(SP>CP){
        let profit=SP-CP;
        document.write("Profit is :: " +profit)
    }
     else if(SP<CP){
        let loss=SP-CP;
        document.write("Loss is :: " +loss)
    }
}

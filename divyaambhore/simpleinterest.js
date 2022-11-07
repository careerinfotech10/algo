function simple_interest(){
    let principal=parseInt(document.getElementById("principal").value);
    let interest=parseInt(document.getElementById("interest").value);
    let time=parseInt(document.getElementById("time").value);
    let simpleinterest=(principal*interest*time)/100;
    document.getElementById("result").innerHTML="Simple Interest= "+simpleinterest;
}
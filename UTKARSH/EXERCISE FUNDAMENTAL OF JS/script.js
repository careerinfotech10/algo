
var row=1;

var entry=document.getElementById("entry");

entry.addEventListener("click",displaydetails);

 
function displaydetails(){

var name=document.getElementById("name").value;
var address=document.getElementById("address").value;
var amount=document.getElementById("amount").value;
var item=document.getElementById("item").value;



if(!name || !address || !amount || !item){
    alert("please fill all the details in boxes")
    return;
}

var display=document.getElementById("display");

var newRow=display.insertRow(row);
var cell1=newRow.insertcell(0);
var cell2=newRow.insertcell(1);
var cell3=newRow.insertcell(2);
var cell4=newRow.insertcell(3);

cell1.innerHTML=name;
cell2.innerHTML=address;
cell3.innerHTML=amount;
cell4.innerHTML=item;

row++;


}

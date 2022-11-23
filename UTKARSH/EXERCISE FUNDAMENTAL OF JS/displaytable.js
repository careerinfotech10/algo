var entry = document.getElementById("entry");
entry.addEventListener("click",displaydetails);

var row = 1;
function displaydetails(){

    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var grade = document.getElementById("grade").value;

if(!name || !age || !grade){
    alert("please fill all the boxes");
    return;
}

var display = document.getElementById("display");
var newRow = display.insertRow(row);
var cell1 = newRow.insertcell(0);
var cell2 = newRow.insertcell(1);
var cell3 = newRow.insertcell(2);

cell1.innerHTML = name ;
cell2.innerHTML = age  ;
cell3.innerHTML = grade;

row++;


}
displaydetails
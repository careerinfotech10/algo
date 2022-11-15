let physics = prompt("Enter Physics marks : ");
let chemistry = prompt("Enter Chemistry marks : ");
let maths = prompt("Enter Maths marks : ");
let biology = prompt("Enter Biology marks : ");
let english = prompt("Enter English marks : ");

let average = parseInt(physics)+parseInt(chemistry)+parseInt(maths)+parseInt(biology)+parseInt(english)/5;
document.write("Average marks of HSC student in 5 subjects : "+average);
function duplicate(){
let number = document.getElementById("num1").value;
let dup = 0;
let array1 = [2,6,9,4,8,3,6,9,5,9];
let i=0;
while(i<=array1.length){
if(number == array1[i]){
dup =dup + 1;
}i++;
}
if(dup > 1){
document.write(+number+" is occurred "+dup+" times in the array");
}
else if(dup == 1){
document.write(+number+" is occurred "+dup+" time in the array");
}
else{
document.write(+number+" is not prsent in the array");
}
}
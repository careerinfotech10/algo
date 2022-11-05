//1.Addition of two Numbers

/* let num1 = prompt("Enter number 1 : ");
let num2 = prompt("Enter number 2 : ");
let sum = Number(num1)+Number(num2);
document.write("Addition of two numbers : "+sum); */


//2.Largest number among the entered three numbers

/* let num1 = prompt("Enter number 1 : ");
let num2 = prompt("Enter number 2 : ");
let num3 = prompt("Enter number 3 : ");

if(num1 > num2 && num1 > num3){
document.write(num1+" is largest number");
}
else if(num2 > num1 && num2 > num3){
document.write(num2+" is largest number");
}
else if(num3 > num1 && num3 > num2){
document.write(num3+" is largest number");
}
else{
document.write("No larger number found");
} */


//3. Finding Profit & Loss

/* let income = prompt("Enter Income : ");
let cost = prompt("Enter Cost : ");
if(income > cost){
let profit = Number(income) - Number(cost);
document.write("Profit : Rs."+profit);
}
else{
let loss = Number(cost) - Number(income);
document.write("Loss : Rs."+loss);
} */


//4.Calculate Average of two numbers

/* let num1 = prompt("Enter number 1 : ");
let num2 = prompt("Enter number 2 : ");
let avg = Number(num1)+Number(num2)/2;
document.write("Avearage of two numbers : "+avg); */

//5.Calculate the area of a rectangle

/* let length = prompt("Enter length : ");
let breadth = prompt("Enter breadth : ");
let area = Number(length)+Number(breadth);
document.write("Area of a rextangle : "+area); */

//6.Calculate the Simple Interest

let p = prompt("Enter Principal : ");
let r = prompt("Enter Rate : ");
let t = prompt("Enter year : ");

let si = Number(p)*Number(r)*Number(t)/100;
document.write("Simple Interest : "+si);
//example and array
console.log("1. Object Example: Write a JavaScript program to display the properties of a JavaScript object");

let employee={
    ID:101,
    First_Name:"Akshay",
    Last_Name: "Bawangade",
    Email_ID:"akshaybawangade0707@gmail.com",
    Salary:"10,000"
    
}
console.log(employee);

console.log("Display multiple Object Using Objects Array.");

let employee1=[
    {
        Name:"Akshay Bawangade",
        ID:"101",
        Email_ID:"akshaybawangade0707@gmail.com",
        Salary:"10,000"

    },
    {
        Name:"Chandrakant Nachane",
        ID:"102",
        Email_ID:"Chandrakantnachane@gmail.com",
        Salary:"10,000"
    },
    {
        Name:"Siddharth Potpose",
        ID:"102",
        Email_ID:"siddharthpotpose@gmail.com",
        Salary:"10,000"
    }
]
for (let i=0;i<=2;i++)
{
    console.log(employee1[i]);
}
//
//printing fruits name by Array

let fruits;
fruits=["apple","mango","banana","waterlemon","orange"];
for(a=0;a<=fruits.length-1;a++)
{
    console.log(fruits[a]);
}
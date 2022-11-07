// question 1 
let fruits = ["apple", "mango", "banana"];
for (i = 0; i <= 2; i++) {
    console.log(fruits[i])
}
// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])

// ---------------------------------------------------------

// question 2

let days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
input = Number(prompt('enter value between 1 to 7 for weeks days'));
document.write(days[input - 1])    //ans is sunday 

// ---------------------------------------------------------------------------------------------

// sample 1 arrey

let employees = [
    {
        firstName: "siddharth",
        lastName: "potpose",
        emailId: "siddharthpotpose9@gmail.com",
        salary: 79000,
    },
    {
        firstName: "Arpan",
        lastName: "potpose",
        emailId: "arpanpotpose@gmail.com",
        salary: 55000,
    }
]
for(let i=0;i<=2;i++)
{
    document.write( "<hr> <br>"+employees[i].firstName," ",employees[i].lastName," <br>",employees[i].emailId,"<br>",employees[i].salary)
}
   


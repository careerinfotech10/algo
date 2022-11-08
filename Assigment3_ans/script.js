// Example no : 1

// let student =
// {
//     fname:"Mayur",
//     lname:"Mahajan",
//     age:22,
//     salary:50000
// }
// document.write("Firstname : "+student.fname+"<br>"+"Lastname : "+student.lname+"<br>"+"Age :"+student.age+"<br>"+"Salary :"+student.salary)

//Example no : 2

let student=
[
    {
        fname:"Mayur",          lname:"Mahajan",
        age:22,
        salary:50000
    },
    {
        fname:"Akshay",
        lname:"Gagare",         
        age:22,
        salary:50000
    }
]
for(let i=0; i<2; i++){
    document.write(student[i].fname," ",student[i].lname," ",student[i].age," ",student[i].salary)
}

// Example no : 3

// let fruit=["apple","mango","pineapple"]
// for(let i=0; i<=2; i++){
//     document.write(fruit[i]+"<br>")
// }

// Example no : 4

// function input(){
//     let days=["","sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
//     let num=prompt("Enter number from 1 to 5");
//     num=parseInt(num);
//     document.write(days[num])
// }
// input()
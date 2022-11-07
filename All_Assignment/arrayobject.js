let student = [{
    id: 1001,
    firstName: "Roshan",
    lastName: "singh",
    email: "roshan12345@gmail.com",
    fees: 20000
},
{
    id: 1002,
    firstName: "Ratnesh",
    lastName: "Kumar",
    email: "Ratnesh@gmail.com",
    fees: 24000
},
{
    id: 1002,
    firstName: "prakash",
    lastName: "Shinde",
    email: "Prakash@gmail.com",
    fees: 28000
}]

for(i=0;i<student.length;i++)
{
    console.log("Student Id: "+student[i].id+" First Name: "+student[i].firstName+" Last Name: "+student[i].lastName+" Email: "+student[i].email+" Fees: "+student[i].fees)
}
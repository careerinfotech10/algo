let emp = [{
    id: 1001,
    firstName: "Rahul",
    lastName: "Kumar",
    email: "rahul271096@gmail.com",
    salary: 20000
},
{
    id: 1002,
    firstName: "Ankit",
    lastName: "Kumar",
    email: "ankit@gmail.com",
    salary: 24000
},
{
    id: 1002,
    firstName: "pankaj",
    lastName: "Sharma",
    email: "Pamkaj@gmail.com",
    salary: 28000
}]

for(i=0;i<emp.length;i++)
{
    console.log("Employee Id: "+emp[i].id+"First Name: "+emp[i].firstName+"Last Name: "+emp[i].lastName+"Email: "+emp[i].email+"Salary: "+emp[i].salary)
}
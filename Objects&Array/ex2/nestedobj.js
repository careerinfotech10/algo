

let student= [{
    Name:'Vishakha mhasaye',
    rollN0:234,
    sec:'B',
    subject:'IIM'
    
},
 
{
    Name:'Vaidehi kulkarni',
    rollN0:235,
    sec:'C',
    subject:'PBM'

}

]

for(let i=0;i<=2;i++){
    document.write(student[i].Name," ","Rollno:"+student[i].rollN0," ","Section"+student[i].sec," ","Subject:"+student[i].subject);
}


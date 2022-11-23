// currying scope : we can break or we can separate argument list in an individual function and 
//                   call it together .

function details(obj){

    return function(keyinfo){
        return obj[keyinfo]// we have taken object so we have to take square bracket only.
    }
}

let info={
name:"raju",
age : 18 ,
email:"raju1234@gmail.com",
class:18,
}
// now we have to store data so that we area taking another variable temp ( temporary);
temp = details(info)("class")
console.log(temp);
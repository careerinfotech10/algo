//iteratable - where implement iterable protocol , that we can call as iterable.
/* rules to create iterable 
rule no.1:the object must have function with key (symbol.iterator)
(OR): function with key must have function
rule no.2: symbol.iterator must have iterator object
rule no.3: the iterator object must have a function which name must be next/next function
rule no.4: next function must return an object with two fields(value , done:false/true)


*/
let count;
let obj={
    [Symbol.iterator]:function(){
        count=0;
let iterator= {
      next:function(){
        count++;
if(count==1){
    return{value:'utkarsh',done:false}
}
else if(count==2){
    return{value:'rambhau',done:false}
}
else if(count==3){
    return{value:'neeraj',done:false}
}
else if(count==4){
    return{value:'abhay',done:false}
}
else if(count==5){
    return{value:'abhimanyu',done:false}
}

else{
    return{value:'neeraj',done:true}
}
      }

}
return iterator;
    }
}
for(u of obj){
    console.log(u)// u is just normal variable we have taken we can take any variable instead of u
}
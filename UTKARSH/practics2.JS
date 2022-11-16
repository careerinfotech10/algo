
 // lenght method
var a=[10,20,30,40];
// it is used to calculate length of element
console.log(a.length);

// shift method
var b=[10,20,30,40];
// it removes the first item of an array
console.log(b.shift());
console.log(b)

// unshift method
var x=[10,20,30,40];
// it is used to add element in the begining of array.
console.log(x.unshift(50,60,));
console.log(x)

//pop method
var y=[10,20,30,40,50];
// it is used to remove the last element of an array.
console.log(y.pop());
console.log(y)

// push method
 var z=[10,20,30,40,50]
 // it is used to add element in the ending of an array.
 console.log(z.push(80,90));
 console.log(z)


 // index method
 var ind=[10,20,30,40,50]
 // this method is used to find index of an element
console.log(ind.indexOf(50));
console.log(ind.indexOf(30));
console.log(ind[2]);
console.log(ind.indexOf(300));// in this case if element not present in array then it will retuen -1 always.

//lastIndexOf method
var l=[10,20,30,40,50,40,20,90,10];
console.log(l.lastIndexOf(10));
console.log(l.lastIndexOf(40));

//includes method
var i=[10, 20, 30, 40 , 50 , 60 , 70, 80, 90, 100];
//it is used to know if element present in that array or not if present it will return true,the boolean value.
console.log(i.includes(40));
console.log(i.includes(110));

//join method
var j=[10,20,30,40,50];
// it is use to convert array into string , to add any special symboll.
console.log(j.join("-"));
console.log(j.join("'' ''"));
console.log(j.join( "'' ,''"));

// reverse method
var r=[10,20,30,40,50]
// it is used to print array in reverse format.
console.log(r.reverse());


//concat method.
var c1=[10, 20, 30, 40 ,50]
var c2=[60, 70, 80, 90, 100]
// it joints two or more strings
var c3=c1.concat(c2)
console.log(c3)

//foreach method
var arr=[10,20,30,40,50]
// the foreach methods calls a function for each element of an array.
arr.forEach(myfunction);
function myfunction(number){
    console.log(number)
}

//every method
var arr=[10,20,30,40,50]
//this method is used weather all elements should passed particular condition or not.
var arr2=arr.every(myfunction);
 function myfunction(number){
    return number>5
 }
 console.log(arr2);

 //some method.
 var arr1=[1,2,3,4,5,6,7,8]
 //this method is used weather some elements should pass particular condition or not.
 var arr2=arr1.some(myfunction);

 function myfunction(item){
    return item >9
 }
 console.log(arr2);

 // filter method.
 var array1=[10,20,30,40,50,60,70,80,90,100]
 // this method is used to create a new array who matches the given condition.
 var array2=array1.filter(filteration);

 function filteration(item){
    return item>70
 }
console.log(array2);

//splice method.
var array1=[10,20, 30, 40, 50,70]
// splice will have 3 argument in his function 
//first argu - it will tell us from where it will start.
//second argument- how many element you want to delete.
// third argu- how many to insert
console.log(array1.splice(2,2, 100, 90, 80))
console.log(array1);

//map method.
var array1=[5, 10, 15, 63, 2, 31, 7]
// this method is used to simplify a array it makes easier to perform.
// if we want to add particular dividation or multiplication or other to eaach and every element of array then we can use this method.
var array2=array1.map(mysimplefunction)
function mysimplefunction(value){
    return value*6
}
console.log(array2); 
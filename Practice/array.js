//Array Index starts from zero(0)
//i) Index--  means if there are column or the array bracket the index of 1st column is zero(0)
//ii)Element-- means the value inside the column or array bracket[]
//[]this is array bracket

//Simple Example-It is to print all the number with []
let number=[10,20,30,40,50,60]           //Ans-[10,20,30,40,50,60]
console.log(number)

//Example 2- To show particular output by taking index[value]in console.log

let num1=[10,20,30,40,50,60]       //Ans- 20  (because index starts from 0..so at 0 value is 10)
console.log(num1[1])

//Example 3- To change any particular value in array

let num2=[30,60,90,120,150,180,210]
num2[4]=45
console.log(num2[4])        //Ans- 45 (I redefine the value of index 4 i.e 150 to 45)

//Example 4- array with the loop

let num3=[20,40,60,80,100]              //Ans- 20  40   60  80  100
for(let index=0;index<=4;index++)
{
    console.log(num3[index])
}

//Example 5- if array bracket value reduce or increase and then condition should be given below

let num4=[10,30,50,70,90,110,130]                //Ans- 10  30  50  70  90   110    130
for(let input=0;input<=num4.length-1;input++)
{
    console.log(num4[input])
}
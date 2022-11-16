function factorial(number){

if(number<=1)
{
    console.log('invalid number');
    return -1
}
let sum=1
for(let i=1; i<=number; i++)
{
  sum=sum*i;
}

return sum;
}
result=factorial(7);
console.log(result);

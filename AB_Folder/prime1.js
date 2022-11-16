function prime(a)
{
for(let i=1;i<a;i++)
   {
    if(a%i===0){
        return+a+"not a prime number"
    }
   }
   return +a+"is a prime number"
}

result=prime(7);
console.log(result);
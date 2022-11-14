function prime(a)
{
    for(i=2;i<a;i++)
    {
        let num=0;
        if(a%i===0)
        {
            console.log(i+"::a prime number")
        }
        else
        {
            console.log(i+":: not prime number")
        }
    }
}
result=prime(15);

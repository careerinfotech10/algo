function fibonacci(number)
{
    let first=0,second=1;
    for(i=1;i<=number;i++)
    {

        next=first+second;
        first=second
        second=next
        console.log(first)
    }
}
result=fibonacci(5);
console.log(result)

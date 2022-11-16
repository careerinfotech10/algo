let array=[10,15,8,4,8,1,5,8];
let item=8;
function fun(array,item)
{
    for(i=0;i<=7;i++)
    {
        if(array[i]===item)
        {
            return i;
        }
    }
    return -1;
}
ab=fun(array,item);
console.log(ab);


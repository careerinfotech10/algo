let array=[10,20,30,40,20,60,70,30,90,100];
function duplicate(array)
{
    for(let i=0;i<array.length;i++)
    {
        for(let j=i+1;j<array.length;j++)
        {
            if(array[i]===array[j])
            {
                console.log(array[i])

            }
            
        }
    }
    
}duplicate(array);
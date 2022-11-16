let array=[10,20,30,20,50,60];
function duplicate(array)
{
    for(let i=0;i<array.length;i++)
    {
        for(let j=i+1;j<array.length;j++)
        {
            if(array[i]=== array[j])
            {
                console.log(array[i])
            }

        }

    }
    
}
duplicate(array);
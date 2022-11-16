//palimdrome


function isPalimdrome(str)
{
    let reverse="";
    for(let i=str.length-1;i>=0;i--)
    {
        reverse+=str[i];
    }
    if(str===reverse)
    {
        console.log(str+"::given string is palimdrome");
    }
    else
    {
        console.log(str+"::given string is not a palimdrome")
    }

}
isPalimdrome("madam")
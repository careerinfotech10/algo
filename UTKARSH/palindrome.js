// palindrome : when the string gives same result when counted from backside also. ex: madam , ex: 121.

function ispalindrome(str){

let reversestr=''

for(let i=str.length-1; i>=0; i-- ){
    //console.log(str[i])
    reversestr=reversestr+str[i];
}
if(str===reversestr){
    console.log("given string is palindrome")
}
else{
    console.log(" Given string is not palindrome")
}

}

ispalindrome("madam");
//console.log(ispalindrome);
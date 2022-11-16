function isprime(number){
    for(let i=2; i< number ; i++){

        if(number % i == 0){
            return number+": this is NOT A PRIME number."
        }
    }

return number+": this is PRIME NUMBER"
}

result=isprime(1)
console.log(result);
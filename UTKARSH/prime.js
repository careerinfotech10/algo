function isprime(number){
    for(let i=2; i<number ; i++){
        if (number % i ==0){
            return +number+":this is not prime number"
        }
       
    }
    return +number+":this is prime number"
}
result=isprime(21)
console.log(result);
function isprime(n){
    number=0;
    for(let i=2; i<n ; i++){
        if (number % i ==0){
            number ++
        }
        if(number >0   ){
            return +n+":this is prime number"
        }
        else{
            return +n+': this is not a prime number '
        }
    }
}
result=isprime(21)
console.log(result);
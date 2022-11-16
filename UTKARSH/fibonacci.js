function fibo(n){

    let first=0;
    let second=1;
    let next=0;// later we have to take next=first+second or we can take here also .
    for(i=0; i<=n; i++){
        console.log(first)
        next=first+second
        first=second
        second=next
    }
}
fibo(7);
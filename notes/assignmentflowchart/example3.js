let Income=prompt("Enter your income")
let Cost=prompt("Enter the cost")
if(Income>=Cost){
    Profit=Income-Cost
    document.write(Profit)
}
else{
    Loss=Cost-Income
    document.write(Loss)
}
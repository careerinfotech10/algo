
let Income;
Income = prompt('Enter the income');
let Cost;
Cost = prompt('Enter the cost');

Profit=Income-Cost;
Loss=Cost-Income;

if(Income>=Cost){
    document.write('Profit')
}
else{
    document.write('Loss ')
}

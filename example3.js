let income=prompt('enter first value')
let cost=prompt('enter second value')
if(income>=cost)
{
    let profit=income-cost
    document.write('profit :-'+profit)
}
else {
    let loss=cost-income
    document.write('loss :-'+loss)
}
let cost,income,profit,loss;
income=prompt("Enter income")
cost=prompt("Enter cost")

if(income>=cost){
    profit=income-cost;
    document.write("profit:" +profit);
}
else{
    loss=cost-income;
    document.write("loss:" +loss);
}
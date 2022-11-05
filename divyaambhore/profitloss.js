//Design flowchart for calculating the profit and lossaccording to the value entered by user.

function profit_loss()
{
    let income= parseInt(document.getElementById("income").value);
    let cost=parseInt(document.getElementById("cost").value);
    if(income>=cost)
    {
        profit=income-cost;
        document.getElementById("result").innerHTML="profit:"+profit;
    }
    else{
        loss=cost-income;
        document.getElementById("result").innerHTML="loss:"+loss;
    }
}
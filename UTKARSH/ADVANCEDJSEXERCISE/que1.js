/*
1. Write a class with name Employee and basic as its data member, to find 
the gross pay of an employee for the following allowances and 
deduction. Use meaningful variables. Dearness Allowance = 25% of the 
Basic Pay  House Rent Allowance = 15% of Basic Pay Provident Fund = 
8.33% of Basic Pay Net Pay = Basic Pay + Dearness Allowance + House 
Rent Allowance Gross Pay = Net Pay − Provident Fund
*/
class employee{

constructor(b){
    this.basic=b;

}
calculate(){
let pf,gp,np,hra,da;

da  = 25/100*this.basic;
hra = 15/100*this.basic;
pf  = 8.33/100*this.basic;
np = this.basic+da+hra;
gp = np-pf;

console.log("gross pay is = " + gp );

}

}

let e1=new employee(200000);
let e2=new employee(700000);
let e3=new employee(100000);
e1.calculate();
e2.calculate();
e3.calculate();
class bank{
    name ; accNo ; type; bal; a ; b;
input(){
    this.name=prompt("enter name of depositor");
    this.accNo=parseInt("enter your account number");
    this.type=prompt("account type / saving or current ");
    this.a=   prompt("amount to be deposit/add in account");
    this.b=   prompt("amount to be withdrawn");
   // this.bal=prompt("to store the balance amount in the account");
}
display(){
    document.write(this.name+'<br>'+
                 this.accNo +'<br>'+      
                 this.type+'<br>'+ 
                 "updated balance: "+this.bal)
}
calculate(){
let bal;
this.bal=this.a-this.b
}
}
let customer1=new bank;
customer1.input();
customer1.calculate();
customer1.display();
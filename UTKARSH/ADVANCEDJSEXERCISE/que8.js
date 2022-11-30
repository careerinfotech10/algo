class bill{
    name; consumerNo ; unitConsumed ; billAmount ;
    input(){
        this.name=prompt("enter customer name");
        this.consumerNo=parseInt(prompt("enter your electric bill consumer no."));
        this.unitConsumed=parseInt(prompt("no. of units consumed"))
//     this.billAmount=("") we have to calculate this 
    }
    display(){
        document.write(this.name+'<br>'+
          "CONSUMER NUMBER : " + this.consumerNo+'<br>'  +
          "UNIT CONSUMED   : " + this.unitConsumed+'<br>'+
          "BILL AMOUNT     : " + this.billAmount);
    }
    calculate(){
        //let unitRates;
        //billAmount=this.unitConsumed*unitRates;
        if(this.unitConsumed>=100){
            this.billAmount=this.unitConsumed*1.20
        }
        else if(this.unitConsumed>100 && this.unitConsumed<=200){
            this.billAmount=this.unitConsumed*2.20
        }
        else if(this.unitConsumed>200 && this.unitConsumed<=300){
            this.billAmount=this.unitConsumed*3.20
        }
        else{
            this.billAmount=this.unitConsumed*4
        }
    }
}
e1=new bill;
e1.input()
e1.calculate()
e1.display();
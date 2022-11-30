class employee{
pan ; name ; tax_income ; tax ;

input(){
this.pan=prompt("enter your personal account number");
this.name=prompt("enter your NAME");
this.tax_income=parseInt(prompt("enter your TOTAL income"));
}
display(){

    document.write(this.pan+' '+this.name+'  '+this.tax_income+' '+this.tax);
    
}
calculate(){
    if(this.tax_income<=100000){
        this.tax=0;
    }
    else if(this.tax_income>100000 && this.tax_income<150000){
       this.tax=10/100*(this.tax_income-100000)
    }
    else if(this.tax_income>150000 && this.tax_income<250000){
        this.tax=20/100*(this.tax_income-150000)
    }
    else{
        this.tax=25000+(30/100)*(this.tax_income-250000)
    }
}
}

let a1=new employee;
a1.input();
a1.calculate();
a1.display();
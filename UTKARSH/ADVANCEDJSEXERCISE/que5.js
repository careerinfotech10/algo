class mobike{
    name; bno ; phno ; days ; charge ;
    input(){
    this.name=prompt("enter your NAME")
    this.bno=prompt("enter your BIKE NUMBER")
    this.phno=prompt("enter your PHONE NUMBER")
    this.days=prompt("enter NO.OF DAYS that you want our bike on rent")
    }
    display(){
       // document.write("NAME          BIKE NUMBER      PHONE NO.        DAYS         CHARGE"+'<br>' )
        document.write(this.name+ ' '+ this.bno+ ' '+ this.phno+' '+this.days+' '+this.charge);
    }
    calculate(){
        if(this.days<=5){
        this.charge=this.days*500
        }
        else if(this.days<=10){
        this.charge=this.days*400
        }
        else if(this.days>10){
        this.charge=this.days*200
        }
    }
}
let bike1= new mobike;
bike1.input();
bike1.calculate();
bike1.display();

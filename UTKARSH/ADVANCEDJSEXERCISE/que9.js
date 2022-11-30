class employee{
    emp_no; name ; basic ; da ; ta ;hra; pf ; gross;
    //gross=(basic+da+ta+hra)-pf
    input(){
        this.name=prompt("enter employee name");
        this.emp_no=parseInt(prompt("enter employee number"));
        this.basic=parseInt(prompt("enter your monthly basic salary"));
  // we have to calculate gross salary and pf      
    }
    display(){
        document.write("EMPLOYEE NAME :"+this.name+'<br>'+
                       "EMPLOYEE NUMBER :"+this.emp_no+'<br>'+
                       "GROSS SALARY :"+this.gross+'<br>'+
                       "P.Fcontribution :"+this.pf)
    }
    calculate(){
       /* da=(53/100)*this.basic;
        ta=(12/100)*this.basic;
        hra=(10/100)*this.basic;
        pf=(8/100)*this.basic;
        this.gross=(basic+da+ta+hra)-pf;*/
        let da;
        let ta;
        let hra;
        let pf;
      

        if(this.basic>=20000){
            da=(53/100)*this.basic;
            ta=(12/100)*this.basic;
            hra=(10/100)*this.basic;
            pf=(8/100)*this.basic;
            this.gross=(this.basic+da+ta+hra)-pf;
            this.pf=pf;
        }
        else if(this.basic>=10000 && this.basic<20000){
            da=(45/100)*this.basic;
            ta=(10/100)*this.basic;
            hra=(12/100)*this.basic;
            pf=(7.5/100)*this.basic;
            this.gross=(this.basic+da+ta+hra)-pf;
            this.pf=pf;
        }
        else{
            da=(40/100)*this.basic;
            ta=(8/100)*this.basic;
            hra=(14/100)*this.basic;
            pf=(7/100)*this.basic;
            this.gross=(this.basic+da+ta+hra)-pf;
            this.pf=pf;
        }
    }
   
}
emp1=new employee
emp1.input();
emp1.calculate();
emp1.display();
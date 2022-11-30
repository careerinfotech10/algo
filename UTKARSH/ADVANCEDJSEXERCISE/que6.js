class student{
    name ; hindi ; english ; math ; computer ; average ; grade ;
    input(){
        this.name=prompt("enter your FULL NAME ")
        this.hindi=parseInt(prompt("enter MARKS obtained in HINDI sub "));
        this.english=parseInt(prompt("enter MARKS obtained in ENGLISH sub "));
        this.math=parseInt(prompt("enter MARKS obtained in MATHEMATICS "));
        this.computer=parseInt(prompt("enter MARKS obtained in COMPUTER "));
    }
    display(){
        document.write("your name :"+this.name+'<br>'+
       " total marks : "+(this.hindi+this.english+this.math+this.computer +'<br>') +
       "average marks :  " +this.average+"<br>"+
        "obtained grade : " + this.grade);
    }
    calculate(){
    let average;
    average=((this.hindi+this.english+this.math+this.computer)/4);
    this.average=average;

    if(average>=90){
    this.grade='A++'
    }
    else if(average>=75 && average<90){
    this.grade='A'
    }
    else if(average>=50 && average<75){
    this.grade='B'
    }
    else{
    this.grade='C'
    }
    }
}
s1= new student;
s1.input();
s1.calculate();
s1.display();
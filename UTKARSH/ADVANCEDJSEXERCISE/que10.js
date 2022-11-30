class library{
    indexNo ; title ; author; days;
    input(){
        this.indexNo=prompt("enter book index number / accession number");
        this.title=prompt("enter book name or titl of book");
        this.author=prompt("enter author of book");
        this.days=parseInt(prompt("number of late days//you have taken book and not returned yet"))
    }
    display(){
        document.write("accession number of books :" +this.indexNo+'<br>'+
            " title of book :"+this.title+' <br>'+
           " author name :"+ this.author +' <br>'+
           " late day charges :"+this.charges)
    }
    calculate(){
    let charges;
 this.charges=parseInt(this.days*2);
    
    }
}
let student1=new library;
student1.input();
student1.calculate();
student1.display();
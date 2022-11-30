/* define a class "student" as described below:
data members/instance variables: name,age,m1,m2,m3(marks in 3 subject),maximum,average member methods:
i) to accept the details of the student.
ii)to compute the average and the maximum out of three marks
iii)to display the name, age , marks in three subjects, maximum and average.
write the main method to create an object of a class and call the above member methods.
*/

class student{
    name;age ; m1; m2; m3 ;max; avg ;
    input(){
        this.name=prompt("Enter YOUR NAME Here");
        this.age=parseInt(prompt("Enter YOUR AGE Here"));
        this.m1=parseInt(prompt("Enter YOUR marks 1 Here"));
        this.m2=parseInt(prompt("Enter YOUR marks 2 Here"));
        this.m3=parseInt(prompt("Enter YOUR marks 3 Here"));
    }
    display(){
       document.write("NAME : "+this.name+"<br>");
       document.write("AGE : "+this.age+"<br>");
       document.write("MARKS: "+this.m1+  ','  +this.m2+ ' and ' + this.m3+"<br>");
       document.write("Maximum marks : "+this.max+"<br>");
       document.write("average marks : "+this.avg+"<br>");
    }
    calculate(){
       this.max=Math.max(Math.max(this.m1,this.m2),this.m3);
        this.avg=(this.m1+this.m2+this.m3)/3;
    }
}
let object=new student(); 
object.input();
object.calculate();
object.display();
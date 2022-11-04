

 let a = prompt('Enter first number:');
 let b = prompt('Enter second number:');
 let c = prompt('Enter third number');

 if(a>=b && a>=c){
   largest=a;
 }
 else if(b>=a && b>=c){
    largest=b;
 } 
 else{
    largest=c;
 }

 document.write('The largest number is: '+largest)
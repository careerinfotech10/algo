// lexical scope : a child function can access their parent function data is called lexical scope.
let a=1;
function num(){
    let b=2;

      function fun1(){
         let c=3;

           function fun2(){
              let d=4;
              
                   console.log(a+b+c+d);
           }
           fun2()
      }
      fun1()
}
num()
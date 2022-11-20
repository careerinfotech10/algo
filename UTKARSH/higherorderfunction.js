// when a function return another function then that function is known as higher order function.

function fun(){

return function enjoy(){
    console.log("we are here to celebrate our success journey")
    return function greet(){
        console.log("greet to show gratitude")
    }
}

}
//fun()();
fun()()();
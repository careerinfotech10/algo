let a, b, c;
a = prompt("Enter a")
b = prompt("Enter b")
c = prompt("Enter c")
if (a > b) {
    if (a > c) {
        document.write("a is greatest");
    }
    else {

        document.write("c is greatest");
    }
}

else{
    if (b > c) {

        document.write("b is greatest");
    }
    else {

        document.write("c is greatest");
    }

}
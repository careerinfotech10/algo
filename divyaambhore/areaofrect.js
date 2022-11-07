function areaofrect() {
    let length= parseInt(document.getElementById("length").value);
    let breadth= parseInt(document.getElementById("breadth").value);
    let area=length*breadth;
    document.getElementById("result").innerHTML="Area of Rectangle is : "+area;
}
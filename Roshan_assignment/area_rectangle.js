
length= prompt('Enter the length of rectangle:');
breadth=prompt('Enter the breadth of rectangle:');

function areaRectangle(length,breadth){
    let areaRectangle = length*breadth
    return areaRectangle;
}

document.write("Area of the rectangle: "+areaRectangle(length,breadth));
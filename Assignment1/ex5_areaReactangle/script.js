

function areaRectangle(length,breadth){
    let areaRectangle = length*breadth
    return areaRectangle;
}

length= prompt('Enter the length of rectangle:')
breadth=prompt('Enter the breadth of rectangle:')

document.write("Area of the rectangle: "+areaRectangle(length,breadth));
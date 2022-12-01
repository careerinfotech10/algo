/*
BOM- browser object model 
1) window is default browser.

alert
write (document.write)/open
writeln               /close
prompt
confirm
setTimeout
DOM- what is document object model
document - html page as a document , document is divided into two types.1)properties , 2)functions/methods
object   - by default browser load that html document into object. as a object
model    -and it is sequentially structured

*/
let isDelete=confirm("are you sure do you want to delete ?")
if(isDelete){
    open('https://github.com/utkarsh18032/utkarshfullstack')
    document.write("you have deleted successfully")
}
else{
    document.write("please go safely back")
    close()
}
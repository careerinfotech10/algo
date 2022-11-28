let choice;
choice=parseInt(prompt("enter your menu choice"))
switch(choice){
    case 1:
        document.write("you have selected veg menu ,<br>")
       switch(choice=prompt("enter your veg choice")){
        case '1':
            document.write("you have selected paneer tikka")
            break;
        case '2':
        document.write("you have selected mix-veg")
        break;
       case '3':
        document.write("you have selected special veg-thali")
        break;
        default:document.write("you have selected invalid veg option")
       }
break;
    case 2:
        document.write("you have selected non-veg menu , <br>")
    switch(choice=prompt("enter your non-veg choice")){
        case '1':
            document.write("you have selected chicken fry")
            break;
        case '2':
            document.write("you have selected fish fry")
            break;
        default:document.write("you have selected invalid non-veg option")
    }
 break ;
 default:document.write("you have selected invalid option")
}

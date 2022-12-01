
class BookFair
{
    Bname;double_price;
    input(){
        this.Bname=prompt("Enter the name of the book")
        this.double_price=prompt("Enter the price of the book")
    }
    calculate(){
      
        if(this.double_price <=1000){
          this.d=2;
          this.dp=(this.double_price/100)*this.d
          this.double_price=this.double_price-this.d
        }
        else if(this.dthis.double_price>1000 && this.double_price<=3000){
        this.d =10
        this.dp=(100/this.double_price)*this.d
        this.double_price=this.double_price-this.d
        }
        else if(this.double_price>3000){
            this.d=15 ;
            this.dp=(this.double_price/100)*this.d
            this.double_price=this.double_price-this.d
        }
    }
    display(){
        document.write("Book name: "+this.Bname+"<br>")
        document.write("Price of book: "+this.double_price+"<br>")
        document.write("Price after discount:"+this.d)
    }

}

let book= new BookFair();
book.input()
book.calculate()
book.display()
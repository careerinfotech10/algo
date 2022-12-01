class book{
    book_No ; book_Title ; price ; number ; total ;
    input(){
    this.book_No=parseInt(prompt("enter book number "));
    this.book_Title=prompt("enter title of book");
    this.price=parseInt(prompt("enter price of book"));
    this.number=parseInt(prompt("enter number of orders to be purchased"))
    }
    display(){
        document.write( "BOOK NUMBER : " +this.book_No+'<br>'+
        "BOOK TITLE : " +this.book_Title+'<br>'+
        "BOOK TOTAL : "+ this.total+'<br>')
    }
    calculate(){
        let total;
        this.total=this.price*this.number
    }
}
let b1=new book;
b1.input();
b1.calculate();
b1.display();
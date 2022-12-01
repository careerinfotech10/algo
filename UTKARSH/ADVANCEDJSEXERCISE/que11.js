class fruitJuice{
    product_code ; flavour ; packing_type ; pack_size ; product_price ;
    input(){
        this.product_code=parseInt(prompt("enter your product code number"));
        this.flavour     =prompt("enter product flavour ex. orange , chocolate etc");
        this.packing_type=prompt("enter packing type ex: bottle , can ");
        this.pack_size   =parseInt(prompt("enter packing size ex:200ml , 500ml etc"));
        this.product_price=parseInt(prompt("enter price of the product"));
    //  this.price this is the final price after discount of 10%. =10/100*this.product_price.
    }
    display(){
         document.write("PRODUCT CODE NO :"  +this.product_code+'<br>'+
         "PRODUCT FLAVOUR :"  +this.flavour+'<br>'+
         "PACKING TYPE  :"  +this.packing_type+'<br>'+
         "PACKING SIZE(in ml): "  +this.pack_size+'<br>'+
                       // this.product_price+'<br>'+
        "FINAL PRICE OF PRODUCT AGTER 10% DISCOUNT :"  + this.price                             )
    }
    calculate(){
        let price;
        this.price=this.product_price-((10/100)*this.product_price)
    }
}
let f1=new fruitJuice;
f1.input();
f1.calculate();
f1.display();
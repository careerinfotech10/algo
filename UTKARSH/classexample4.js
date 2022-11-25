class electronics{

    constructor(brandName,price,ram){
    this.brandName=brandName,
    this.price=price,
    this.ram=ram
    }

laptop(){
    console.log(this.brandName,
        this.price,
        this.ram)
}

}
let item1=new electronics("dell", 45000 , 8+'gb');
let item2=new electronics("hp",54000,"8gb");
let item3=new electronics("microsoft",72000,"16gb")
item1.laptop();
item2.laptop();
item3.laptop();
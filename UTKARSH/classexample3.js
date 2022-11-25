class founder{

    constructor(founderName,companyName){
       this.founderName=founderName,
       this.companyName=companyName
    }

    showdetails(){
        console.log(this.founderName,
                    this.companyName,
                      )
    }
}
let f1= new founder("ashnir grover", "bharat-pay");
let f2= new founder("vijay shekhar sharma" , "paytm")
let f3= new founder("sachin bansal", "flipkart")
let f4= new founder("kunal bahl", "snapdeal")

f1.showdetails();
f2.showdetails();
f3.showdetails();
f4.showdetails();

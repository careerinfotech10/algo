class person{

    constructor(name,netWorth,incomeSource){
    this.name=name,
    this.netWorth=netWorth,
    this.incomeSource=incomeSource
    }

show(){
console.log(this.name,
    this.netWorth,
    this.incomeSource)
}

}
let first= new person("gautam adani", 138 + " billion $","Diversified")
let second=new person("mukesh ambani", 116+" billion $", "reliance jio")
let third= new person("elon musk", " 170 billion $", "tesla,spacex,twitter")
first.show();
second.show();
third.show();
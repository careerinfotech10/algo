class employee{
//this emp={firstName:null, lastName:null, dob:null}
//constructor will add properties/data inside empty object and initialize it
constructor(firstName , lastName , dob, mobileNo, email){
    this.firstName=firstName ,
    this.lastName=lastName,
    this.dob=dob,
    this.mobileNo=mobileNo,
    this.email=email
}
details(){
    console.log(this.firstName ,
        this.lastName,
        this.dob,
        this.mobileNo,
        this.email)
}
}
let student1=new employee("utkarsh","patil","18-03-2000",8999101445,'utkarshpatil1834@gmail.com')
let student2=new employee("rakshak","chavan","12-03-1998", 7448095513, 'rakshakchavan@gmail.com')
let student3=new employee("ajinkya","mahajan","10-05-2000",1234567890,'utkarshpatil1834@gmail.com')
let student4=new employee("rakshak","chavan","12-03-1998", 7448095513, 'rakshakchavan@gmail.com')
student1.details();
student2.details();
student3.details();
student4.details();
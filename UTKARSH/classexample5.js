class survey{
constructor(name,standard,sub,school){
this.name=name,
this.standard=standard,
this.sub=sub,
this.school=school
}
info(){
  console.log(   this.name,
                 this.standard,
                 this.sub,
                 this.school
                                )
}
}
 let student1=new survey("utkarsh patil", "M.B.A.", "finance and marketing", "C.I.B.M.R.D.");
 let student2=new survey("saurabh zade","B.Tech", "computer science", "W.C.E.");
 let student3=new survey("lokit ade","Physiotherapy","human-body","GMC");
 student1.info();
 student2.info();
 student3.info();
// prototype inheritance :
// one object can share its properties to other object is called proto type inheritance

let obj1={
    name:'utkarsh',
    class:'12',
    number:'8999101445'
}

let obj2={
    __proto__:obj1,
    lastName:'patil',
    fun:function(){
        console.log(this.name,
                  this.class,
                 this.number,
                 this.lastName)
    }
}
obj2.fun();
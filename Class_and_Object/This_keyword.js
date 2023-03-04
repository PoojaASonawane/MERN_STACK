class Student{
    constructor(name){
        console.log("Constructor Called")
        this.name=name
    }

sayHello()
{
    console.log("hello " + this.name)
}
}
let o1=new Student("pooja")
o1.sayHello()
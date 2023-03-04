class Student{
    static count=0
    constructor(name){
        this._name=name
        Student.count++
    }
    show()
    {
        console.log(Student.count)
    }
}
let ob1=new Student("abc")
let ob2=new Student("xyz")
let ob3=new Student("pqr")
ob1.show()
//ob2.show()
//ob3.show()
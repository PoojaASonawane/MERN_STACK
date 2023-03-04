class A{
    show(){
    console.log("In class A")
    }
}
class B extends A{
    disp(){
        console.log("In class B")
    }
}
let obj=new B()
obj.show()
obj.disp()



/*
class A{
    constructor(){
    console.log("In constructor A")
    }
}
class B extends A{
    constructor(){
        super()
        console.log("In constructor B")
        
    }
}
let obj=new B()
*/

class A{
    constructor(){
    this.i=100
    }
}
class B extends A{
    constructor(){
        super()
        this.j=200
        }
        add(){
            console.log(this.i+this.j)
        }
}
let obj=new B()
obj.add()

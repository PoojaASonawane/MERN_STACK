class User{
    constructor(name){
        this.n=name
    }
}
let msg={
    SayHello(){
        console.log(`Hello ${this.n}`)
    }
}
Object.assign(User.prototype, msg)
let obj=new User("Pooja")
obj.SayHello()

 
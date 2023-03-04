/*
class A{
    show(){
        console.log("In A")
    }
}
class B extends A{
    show(){
        console.log("In B")
    }
}
let ob=new B()
ob.show()  //In B
*/

class Animal{
    talk(){
        console.log("Animal Sounds")
    }
}
class Dog extends Animal{
    talk(){
        console.log("Bow Bow")
    }
}
class Duck extends Animal{
    talk(){
        console.log("Quack quack")
    }
}
let ob=new Dog()
ob.talk()
let obj2=new Duck()
obj2.talk()

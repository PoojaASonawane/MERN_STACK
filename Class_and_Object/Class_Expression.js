// let s=class{
//     sayHello(){
//         console.log("Hello World")
//     }
// }
// let obj=new s()
// obj.sayHello()

function show(s1)
{
    let obj1=new s1()
    obj1.Hello()
}
let s=class{
    Hello(){
        console.log("Hello Pooja")
    }
}
show(s)  //pass whole class to the function

let area=(r)=>3.14*r*r
let x=area(3)
console.log(x)
// ########################################
let msg=()=>"Hello!"
console.log(msg())
// #########################################
//Multiline Arrow Function
let fun=(x,y,z)=>{
    x=x+5
    y=y*10
    z=z+2
    let total=x+y+z
    return total
}
let ans=fun(10,20,30)
console.log(ans)
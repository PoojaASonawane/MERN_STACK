
function fun1(num){
    num=num+3
     return num
}
function fun2(num){
    num=num*2
    return num
}
function fun (num,c1,c2)
{
  let a=c1(num)
  let b=c2(a)
  console.log(b)
}

fun(4,fun1,fun2)
// #############################################

function addMultiply(num,call1,call2){
    let num1=0
    let num2=0
    num1=call1(num)
    num2=call2(num1)
    return num2
}
function mul(num){
    return num *2
}
function add(num){
    return num +3
}

console.log(addMultiply(4,mul,add))
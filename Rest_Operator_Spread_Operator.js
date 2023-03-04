function sum(...arr){  //Rest Operator
    let z=0
    arr.forEach(n=>{
        z=z+n
    })
    return z
}
let a=sum(10,20)
console.log(a)
a=sum(10,20,30)
console.log(a)

//Spread Operator
let arr2=[1,2,3,4]
b=sum(...arr2)
console.log(b)
//using spread operator we can pass multiple array to the function
let arr3=[1,2,3,4,5]
let arr4=[6,7,8,9]
let s=sum(...arr3,...arr4)
console.log(s)
//we can combine spread values with normal syntax
let s2=sum(10,...arr3,40,...arr4)
console.log(s2)
//spread syntax can be used to merge array
let s3=[10,...arr3,40,...arr4]
console.log(s3)
//spread syntax can be used to convert string into array
let s1="Hello"
console.log([...s1])
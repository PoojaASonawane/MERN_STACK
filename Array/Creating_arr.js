let arr1=[]
console.log(typeof arr1)   //object

let arr2=new Array()

let arr=[10,20,30,40,50]
console.log(arr)

//by indexing
console.log(arr[0])
//by using for loop
console.log("by using for loop")
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}
//by using at function
console.log("By using at function")
for(let i=0;i<arr.length;i++){
    console.log(arr.at(i))
}
console.log("by using for each function")
function show(n)
{
    console.log(n)
}
arr.forEach(show)
console.log("in more simple way")
arr.forEach(n=>console.log(n))
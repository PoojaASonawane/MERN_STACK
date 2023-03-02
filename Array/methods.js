//push
let arr=[10,20,30,40,50,30]
arr.push(60)
console.log(arr)
//pop
arr.pop()
console.log(arr)
//unshift
arr.unshift(5)
console.log(arr)
//shift
arr.shift()
console.log(arr)
//concat
arr1=[1,2,3,4]
arr2=[5,6,7,8]
console.log(arr1.concat(arr2))
//indexOf
console.log(arr.indexOf(30))
console.log(arr.indexOf(100))  //if does not found the item it will return -1
x=-1
while(true)
{
    x=arr.indexOf(30,x+1)
    console.log(x)
    if(x==-1){
        break
    }
}
//lastIndexOf
console.log(arr.lastIndexOf(30))
//includes
console.log(arr.includes(100))  //false
//splice
arr.splice(1,2)
console.log(arr)
arr.splice(1,1,100)
console.log(arr)
//slice
let arr3=[1,2,3,4,5,6,7,8,9,10]
let p=arr3.slice(2,7)
console.log(p)
//map
//long way
let arr4=[10,20,30,40,50,60,70,80]
let arr5=[]
for (let i=0;i<arr4.length;i++){
    let y=arr4[i]*arr4[i]
    arr5.push(y)
}
console.log(arr5)
//simple way using map 
arr6=arr4.map(n=>n*n)
console.log(arr6)
//or we can write like 
arr7=arr4.map(function(n){
    return n*n

})
console.log(arr7)

//filter()
let arr8=arr4.filter(n=>n%20==0)
console.log(arr8)

//reduce()
//long way
let a=[1,2,3,4,5,6,7,8,9,10]
let sum=0
for (let i=0;i<a.length;i++)
{
    sum=sum+a[i]
}
console.log(sum)
//simple way
let v1=a.reduce(function name (sum,n){
    return sum+n
},1)
console.log(v1)
// let q=[1,2,15]
// q.sort()
// console.log(q)
function check(a,b){
    if(a==b)return 0
    if(a>b)return 1
    if (a<b)return -1
}
let a1=[1,2,15]
a1.sort(check)
console.log(a1)
//create map object
let m1=new Map()
//add item to Map
m1.set(1,"pooja")
m1.set(2,"rucha")
m1.set(3,"yogi")
m1.set(1,"test")
console.log(m1)
//get
let v=m1.get(2)
console.log(v)
//delete
m1.delete(3)
console.log(m1)
//clear
//m1.clear()
//console.log(m1)
//has
let f=m1.has(2)
console.log(f)
//keys
let mykeys=m1.keys()
for (const x of mykeys){
    console.log(x)
}
//values
for(const v of m1.values()){
    console.log(v)
}
//entries
for (const item of m1.entries()){
    console.log(item[0],item[1])
}
console.log("*******************")
m1.forEach(function(v,k){
    console.log(k,v)

})
//create Map manually
let m2=new Map([[1,'abc'],[2,'xyz']])
console.log(m2)
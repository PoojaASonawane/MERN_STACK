let user={id:100, name:"pooja", address:"satara parisar"}
//let{id,name,address}=user
//console.log(id)

//order of variables does not matter to the LHS
//let {name,id,address}=user
//console.log(id)

//we can unpacked only required values
/*let{id,name}=user
console.log(id)
console.log(name)
*/

let {id:x, name:xyz, address:adr}=user
console.log(x)
console.log(xyz)

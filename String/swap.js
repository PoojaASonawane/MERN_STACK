let s1="abc "
let s2="xyz"
let p =s1.slice(0,2)
let q =s2.slice(0,2)
s3=s1.replace(p,q)
console.log(s3)
s4=s2.replace(q,p)
console.log(s4)
let s5=s3.concat(s4)
console.log(s5)
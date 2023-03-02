let s1="Hello World"
console.log(s1[0])      //H
console.log(s1[4])      //o
console.log(s1[-1])     //undefined
console.log(s1.at(-1))  //d

//using foe loop
let i=0
for(i=0;i<s1.length;i++){
    console.log(s1[i])
}
//##################################################
for (let index in s1){
    console.log(index+" "+s1[index])
}
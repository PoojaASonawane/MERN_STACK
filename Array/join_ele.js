arr=["red","green","white","black"]


// s1=" "

// arr.forEach(element => {
//     s1=s1+element;
// });
// console.log(s1)

s1=" "

arr.forEach(element => {
    s1=s1+element+",";
});
console.log(s1)
s2=s1.slice(0,s1.length-1)
console.log(s2)


// s1=" "

// arr.forEach(element => {
//     s1=s1+element+"+";
// });
// console.log(s1)

//toUpperCase
s1="Hello World"
let s2=s1.toUpperCase()
console.log(s2)
//toLowerCase
s2=s1.toLowerCase()
console.log(s2)
//indexOf
let x=s1.indexOf("l",3)
console.log(x)
//#######################
x = -1
while (true)
{
    x=s1.indexOf("l",x+1)
    console.log(x)
    if(x==-1)
    {
        break
    }
}
//startWith
let p = s1.startsWith("H")
console.log(p)
//include
let q= s1.includes("Hello")
console.log(q)
//slice()
console.log(s1.slice(2,7))
console.log(s1.slice(-4,-1))
//substring... same as slice but does not support -ve indexing and it allow strt index < end index
console.log(s1.substring(2,7))
//codePointAt...gives ASCII Value
console.log(s1.codePointAt(0))
//ParseInt and ParseFloat
a=Number("12px")
b=Number("2px")
c=a/b
console.log(c)   //...NaN

a=parseInt("12px")
b=parseInt("2px")
c=a/b
console.log(c)   //...6
//toString(base)
let num=255
console.log(num.toString(2))
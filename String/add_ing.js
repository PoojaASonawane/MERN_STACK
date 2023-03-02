let s1="mor"
let s2=s1.length
let s3=s1.endsWith("ing")
console.log(s3)
console.log(s2)

if ((s2>=3) && (s3==true))
{
let s4=s1.concat("ly")
console.log(s4)
}
else if (s2<3){
    console.log(s1)
}
else{

    console.log(s1.concat("ing"))
}
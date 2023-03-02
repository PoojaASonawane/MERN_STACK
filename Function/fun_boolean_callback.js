function fun(fun,f)
{
if(f==true){
    fun()
}
else{
    console.log("Ignoring the callback")
}
}
function fun2()
{
    console.log("callback function called")
}
fun(fun2,false)
fun(fun2,true)

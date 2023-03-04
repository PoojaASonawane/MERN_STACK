class Student{
    constructor(name){
        this._name=name
    }
    get name()
    {
        console.log("Get Method Called!")
        return this._name
    }
    set name(n)
    {
        console.log("Setter called!")
        this._name=n
    }
}
let obj=new Student("pooja")
console.log(obj.name)
obj.name="rucha"
let fname=obj.name
console.log(fname)
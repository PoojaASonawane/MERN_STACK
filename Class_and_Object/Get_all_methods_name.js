class Area{
    constructor(radius){
        this.r=radius
    }

CalculateArea(){
    this.area=3.14*this.r*this.r

}
ShowArea(){
    console.log(`Area is ${this.area}`)
}
}
console.log(Object.getOwnPropertyNames(Area.prototype))
let ob=new Area(1.2)
ob.CalculateArea()
ob.ShowArea()
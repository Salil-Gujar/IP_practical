class Bike{
    constructor(brand){
        this.brand=brand;
    }
    show(){
        return this.brand;
    }
}
class Model extends Bike{
    constructor(brand,model){
        super(brand);
        this.model=model;
    }
    present(){
        return "I have a "+this.show()+" , of the model "+this.model;
    }
}
class RegNo extends Model{
    constructor(brand,model,regno){
        super(brand,model);
        this.regno=regno;
    }
    flaunt(){
        console.log(this.present()+" with the registration number as "+this.regno);
    }
}
let bike1=new RegNo("Honda","City","MH-02-AB-01");
bike1.flaunt();
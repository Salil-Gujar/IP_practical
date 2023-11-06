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
        console.log("I have a "+this.show()+" of the model "+this.model);
    }
}
let bike1=new Model("Kawasaki","Ninja");
bike1.present();

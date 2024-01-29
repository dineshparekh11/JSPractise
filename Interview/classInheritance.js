 class Car{
    constructor(model, name){
        this.model = model;
        this.name = name;
    }
    start(){
        console.log(this.name);
    }

    end(){
        console.log("Car stoped");
    }
 }

 class ElectricCar extends Car{

    dashboard(){
        console.log("Child method");
    }

    start(){
        super.start();
        super.end();
        this.dashboard();
    }
 }

 evCar = new ElectricCar('Tesla', 'A320');

 evCar.start();
 evCar.end();
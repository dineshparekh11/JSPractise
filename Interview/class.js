// Class and properties, value

// class Car{
//     constructor(model, name){
//         this.model = model;
//         this.name = name
//     }

//     start(){
//         console.log( `Name of the car: ${this.model}`);
//     }
// }

// bmw  = new Car(620, 'Sports Edition');
// bmw.start();

class Car{
    constructor(model, name){
        this.model = model;
        this.name  = name;
    }
    start(){
        console.log(`Name of the car: ${this.name}`);
    }
}

ford =  new Car(700, 'Mercidise');
ford.start();
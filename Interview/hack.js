// some() and every()

// const taxValue = [20,31,140,150,160,810];
// const tax = taxValue.some(someArray);

// function someArray(val){
//    return val > 30
// }
// console.log(tax);
// -------------------------------------------------------
// map()
// const taxValue = [20,31,140,150,160,810];
// const tax = taxValue.map(someArray);

// function someArray(val){
//    return val > 330
// }
// console.log(tax);
// --------------------------------------------------------
// filter()
// const taxValue = [20,31,140,150,160,810];
// const tax = taxValue.filter(someArray);

// function someArray(val){
//    return val > 330
// }
// console.log(tax);

// --------------------------------------------------------

// reduce()
// const taxValue = [20,31,140,150,160,810];
// const tax = taxValue.reduce(someArray);

// function someArray(val){
//    return val > 330
// }
// console.log(tax);

// --------------------------------------------------------

// const isTrue = !0;
// console.log(isTrue);

// --------------------------------------------------------

// const user = {
//     name: 'John',
// }
// const conditinalStatement = user.name || '';
//default values

// --------------------------------------------------------

//number to string
// const numVal = 10+'';
// console.log(typeof numVal);

// --------------------------------------------------------

// String to number
// let salary = "20"
// salary = +20;
// console.log(salary);
// console.log(typeof salary);


// Class and properties, value

class Car{
    constructor(model, name){
        this.model = model;
        this.name = name
    }

    start(){
        console.log( `Name of the car: ${this.model}`);
    }
}

bmw  = new Car(620, 'Sports Edition');
bmw.start();
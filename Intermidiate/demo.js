// 1. What are the possible ways to create objects in JavaScript

// 1. Object constructor
// var object =  new object();

// 2.Object create method
// var object = object.create(null);

// 3. Object literal syntax:
// var object = {};

// 4. Function constructor
// function Person(name){
//     var object = {};
//     object.name = name;
//     object.age=21;
//     return object
// }

// var object = new Person("Sudheer");
// console.log(object)

// 5.Funtion constructor with prototype:
// function Person(){}
//     Person.prototype.name = "Sudhher";
//     var object = new Person(); 

// var newInstance = object.cerate(func.prototype) 
// var result = func.call(newInstance, x,y,z),
// console.log(result && typeof result === 'object' ? result : newInstance);

// ES6 Class syntax:

// class Person {
//     constructor(){
//         this.name = name;
//     }
// }
// var object = new Person("Sudheer")


// CALL, APPLY, BIND

// Call: The call() method a function with a given this avlue and arguments provided one by one

// var emp1 = {firstName: 'John',  lastName: 'Radson'};
// var emp2 = {firstName: 'Jimmy', lastName: 'Baily'};

// function invite(greet1,  greet2){
//     console.log(greet1 )
// }

// currying function

// const multiArgFunction = (a,b,c) => a + b + c;
// console.log(multiArgFunction(1,2,3));
// const curryUnaryFunction = a => b => c => 1 + b + c;
// curryUnaryFunction(1);
// curryUnaryFunction(1)(2);
// curryUnaryFunction(1)(2)(3);

// Pure function

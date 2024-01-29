// const validateValue = '10.8';
// console.log(!isNaN(validateValue));

// const month  = 'july'
// month = 'feb'
// console.log(month);

let person = {
    name: 'ARC Tutorials' 
}

Object.freeze(person);
person.name = 'Hello world';
console.log(person);
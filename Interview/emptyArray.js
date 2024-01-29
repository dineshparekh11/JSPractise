let student = [10,13,14,11,15,18];
/* Technique #1 */

// student = [];

/* Technique #2 */

// student.length = 0;

/* Technique #3 */

// while(student.length > 0){
//     student.pop();
// }

/* Technique #4 */

student.splice(0, student.length)

console.log(student.length);
console.log(student);

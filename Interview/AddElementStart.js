const employees = [5, 4, 23, 34, 45];
const ele = 2;

const newEmployees = [ele, ...employees];
console.log(newEmployees);

employees.unshift(ele);
console.log(employees);

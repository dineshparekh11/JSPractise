const employees = {
    id: 10,
    name: 'Ram',
    dept: 'Computer Science'
}

const newEmployeeObj = Object.assign({}, employees);
console.log(newEmployeeObj);

const employeeObj = {...employees}
console.log(employeeObj);
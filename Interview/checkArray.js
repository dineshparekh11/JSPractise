const studentIds = [1,2,3,4,6,12,30,24,13];

const passedIds = [1,22,32];

let result = studentIds.some(ele => passedIds.includes(ele));

console.log(result);
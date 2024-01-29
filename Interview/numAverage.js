const studentIds = [10,20,30,40,50];

const totalCount = studentIds.reduce((a,b) => a+b, 0);

const arrLength = studentIds.length;

console.log(totalCount/arrLength);

const duplicateArray = [14,5,8,12,14,5,13];
 
const duplicate = duplicateArray.filter((ele, index, arr) => arr.indexOf(ele) !== index);

console.log(duplicate);

const duplicateArray2 = [2,4,6,4,3,2,1,5,4];

const duplicate2 =  duplicateArray2.filter((ele, index, arr) =>  arr.indexOf(ele) !== index)

console.log(duplicate2);
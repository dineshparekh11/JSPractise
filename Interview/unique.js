const Ids = [10,23,43,24,10,23,34,12];
const uniqueValues = Ids.filter((ele, index, arr) => arr.indexOf(ele) == index);
console.log(uniqueValues);
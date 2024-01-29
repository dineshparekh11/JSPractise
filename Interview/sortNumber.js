const unsortedArray =  [10,4,7,8,12,7,6,35,24,36];

const sortArray = unsortedArray.sort((a, b)=>{
    return a - b;
});

console.log(sortArray); //[24, 35, 10, 12, 4, 7
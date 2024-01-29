// using filter method

// const num = [12,34,54,67,72,23,43,69,33]

// const numMax = num.filter((ele, index, arr) => arr.indexOf(ele) == index)
//         numMax.sort((a,b) => {
//             return b - a;
//         }) 
// console.log(numMax[0]);


// using reduce method

const numberArr = [12,34,154,67,72,23,43,69,33]

function findMaxValue(arr){
    return arr.reduce(function(prev, curr){
        return prev > curr ? prev : curr;
    })
}

console.log(findMaxValue(numberArr));

function findMaxValue(arr){
    return arr.reduce(function (prev, curr){
        return prev > curr ? prev : curr;
    })
}

console.log(findMaxValue(numberArr));
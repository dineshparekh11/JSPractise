const Ids = [23, 45, 64, 67, 34, 23, 45];

const IdsValue = Ids.filter((ele, index, arr) => arr.indexOf(ele) == index).sort((a,b) => {
    return a - b;
});

console.log(IdsValue);
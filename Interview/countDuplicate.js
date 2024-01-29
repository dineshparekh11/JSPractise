const months = ['may', 'feb','may', 'june','may', 'april', 'jan', 'jully', 'feb', 'april', 'december'];

const countOfDuplicate = months.reduce((obj, month) =>{
    if(obj[month] == undefined){
    obj[month] = 1;
    return obj;
    } else {
        obj[month]++;
        return obj;
    }

},{})

console.log(countOfDuplicate);
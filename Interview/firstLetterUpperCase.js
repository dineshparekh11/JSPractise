const days = ['sunday', 'monday', 'tuesday','wednesday','thusday', 'friday', 'saturday'];

let updateDays = [];
for(let day of days){
    day = day.charAt(0).toUpperCase() + day.substring(1);
    console.log(day);
    updateDays.push(day);
}

console.log(updateDays);
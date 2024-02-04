const originalObj = {
    street: '1 Bangalore Ave',
    city: 'Bangalore',
    state:'KA',
    zip: 454512
};


const modifiedObj = {
    ...originalObj,
    country: 'India'
}

console.log(modifiedObj);
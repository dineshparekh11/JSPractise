const originalObj = {
    street: '1 Bangalore Street',
    city: 'Bangalore',
    state: 'KA',
    country: 'India',
    zip: 433434
}

const modifiedObj = {
    ...originalObj,
    road: 'Mysuru Road'
}

console.log(modifiedObj);
const input = {
    "students":[
        {
            name: "Shubham",
            id: 100,
            email:"shubh1@gmail.com"
        },
        {
            name: "Kiran",
            id: 101,
            email:"kiran2@gmail.com"

        },
        {
            name: "Hari",
            id: 102,
            email:"hari5@gmail.com"

        },
        {
            name: "Rani",
            id: 103,
            email:"rani7@gmail.com"

        },
    ]
}

var op = input.students.map(function (item) {
    let stuObj = {
        name : item.name +  item.id,
        email: item.email
    }
    return stuObj;
}) 
console.log(op);
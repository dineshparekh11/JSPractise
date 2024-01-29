const input = {
    "students":[
        {
            "studentId":10,
            "firstName": "Dinesh",
            "age":24
        },
        {
            "studentId":11,
            "firstName": "Manish",
            "age":26
        },
        {
            "studentId":12,
            "firstName": "Dipali",
            "age":23
        },
    ]
}

var op = input.students.filter(function(item){
    return item.studentId > 11 ? item: '';
});

console.log(op);
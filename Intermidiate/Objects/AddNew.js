var ourDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

delete ourDog.bark;

var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
delete myDog.tails;

 console.log(myDog);
 console.log(ourDog);
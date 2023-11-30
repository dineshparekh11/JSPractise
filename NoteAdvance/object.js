var User = function(firstName, courseCount){
    this.firstName= firstName;
    this.courseCount= courseCount;
    this.getCourseCount = function(){
        console.log(`Course count is: ${this.courseCount}`); 
    };
};

User.prototype.getFirstname = function() {
    console.log(`Your firstname is: ${this.firstName}`);
}

var dinesh = new User("Dinesh", 2);
dinesh.getCourseCount ();
dinesh.getFirstname();

// console.log(dinesh);

var sam = new User("Sam", 3);
sam.getCourseCount ();
sam.getFirstname();


// console.log(sam);

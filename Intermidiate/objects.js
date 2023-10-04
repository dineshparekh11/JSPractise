const user = {
    firstName : "Dinesh",
    lastName: 'Kumar',
    role: "developer",
    loginCount: 32,
    facebookSignedIn: true,
    courseList: [],
    buyCourse: function(courseName){
        this.courseList.push(courseName);
    },
    getCourseCount: function (){
        return `${this.firstName} is enrolled in total of ${this.courseList.length} course courses`
    },
    getInfoCourse: function (){
        return `${this.firstName} ${this.role} ${this.loginCount} ${this.facebookSignedIn} ${this.buyCourse()}`
    }
};
var courseList = true;
console.log(user.firstName);

console.log(user.getCourseCount());
user.buyCourse("Recat JS course")
user.buyCourse("Javascript")
console.log(user.getCourseCount());
console.log(user.buyCourse());
console.table(user.getInfoCourse())
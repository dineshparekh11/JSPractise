/*
Define a function that can answer the role of a user.
A user can be on following roles:
aadmin - with all access
subadmin with acccess to create/delete courses
testprep with access to create/delete tests
user - consume all content
other trial user.
Input: getUserRole (name, role) I
*/

function getUserRole(name, role){
    switch (role) {
        case "admin":
            return `${name} is admin with all access`;
            // break; //this is necessary
        case "subadmin":
            return `${name} is sub-admin with access to create and delete content`;
            // break;
        case "testprep":
            return `${name} is testprep with access to create and delete test`;
            // break;
        case "user":
            return `${name} is user with consume all content`;
            // break;
        
        
        default:
            return `${name} is a trial user`;
            break;
    }
}
console.log(getUserRole("dinesh", "testprep"))
console.log(getUserRole("sammy", "user"))
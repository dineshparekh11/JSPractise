// Allow user to access course if he is:
// logged in from email
// logged in from Google
// logged in from Facebook

var email = false;
var facebook = false;
var google = false;

// if(email){
// console.log("Login Success")
// }

// if(facebook){
//     console.log("Login Success")
// }

// if(cardInfo){
//     console.log("Login Success")
// }

if(email || facebook || google ){
    console.log("Login Success");
}
else{
    console.log("error")
}
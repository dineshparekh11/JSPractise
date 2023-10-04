var name = "Hitesh";

console.log("Line number 3", name);

 function sayName() {
    // var name = "Mr. D"
    console.log("Line number 6", name);

    sayNameTwo();

    function sayNameTwo(){
        var name = "Mr. DP"
        console.log("Line number 10", name);
    }

}

 sayName();
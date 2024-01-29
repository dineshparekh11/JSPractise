const str1 = 'Mary';
const str2 = 'Army';

function checkAnagram(str1, str2){
    var a = str1.toLowerCase();
    var b = str2.toLowerCase();

    a = a.split("").sort().join("");
    b = b.split("").sort().join("");

    return a === b;
}

console.log(checkAnagram(str1, str2));
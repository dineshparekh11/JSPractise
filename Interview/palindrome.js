function checkPalindrom(str){
    str = str.toLowerCase();
    return (str == str.split('').reverse().join('')); 
}

console.log(checkPalindrom('madam'));
console.log(checkPalindrom('level'));
console.log(checkPalindrom('nadani'));
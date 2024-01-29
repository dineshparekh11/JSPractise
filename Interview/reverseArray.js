const str = 'Welcome to ARC tutorial';

var reverseStr = reverseStrBySeperator(str, "");

function reverseStrBySeperator(sampleInput, seperator){
    return sampleInput.split(seperator).reverse().join(seperator);
}

console.log(reverseStr);

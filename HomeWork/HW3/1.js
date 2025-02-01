//1. Write a JavaScript function that reverse a number. 
function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}

console.log(reverseNumber(32243));
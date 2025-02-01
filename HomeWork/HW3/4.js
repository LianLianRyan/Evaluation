//4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
//Assume punctuation and numbers symbols are not included in the passed string.

function alphabetOrder(str) {
    return str.split('').sort().join('');
}
console.log(alphabetOrder('webmaster'));
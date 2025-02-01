//5. Write a JavaScript function that accepts a string as a parameter 
//and converts the first letter of each word of the string in upper case. 

function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}
console.log(capitalizeWords('the quick brown fox'));
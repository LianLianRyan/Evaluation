//6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 

function longestWord(str) {
    let words = str.split(' ');
    let longest = words[0];
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}
console.log(longestWord('Web Development Tutorial'));
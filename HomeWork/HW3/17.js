//17. Write a JavaScript function to get the number of occurrences of each letter in specified string. 

function letterCount(str) {
    let count = {};
    for (let char of str) {
        count[char] = (count[char] || 0) + 1;
    }
    return count;
}
console.log(letterCount('hello'));
//23. Write a JavaScript function to find the first not repeated character. 

function firstNonRepeated(str) {
    const map = {};
    
    for (let char of str) {
        map[char] = (map[char] || 0) + 1;
        if (map[char] === 1) {
            return char;
        }
    }
    return null;
}
console.log(firstNonRepeated('abacddbec'));
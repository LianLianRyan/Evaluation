//22. Write a JavaScript function that accepts two arguments, 
//a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
//Sample arguments: 'microsoft.com', 'o' 
//Expected output: 3 

function countLetter(str, letter) {
    let count = 0;
    for (let char of str) {
        if (char === letter) count++;
    }
    return count;
}
console.log(countLetter('microsoft.com', 'o'));
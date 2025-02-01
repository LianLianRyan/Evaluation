//2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
//A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

function isPalindrome(str) {
    str = str.replace(/\s+/g, '').toLowerCase();
    return str === str.split('').reverse().join('');
}
console.log(isPalindrome('madam')); 
console.log(isPalindrome('nurses run')); 
//27. Write a JavaScript function that returns the longest palindrome in a given string. 
//Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".

function longestPalindrome(str) {
    let maxLength = 0, start = 0;

    function expandAroundCenter(left, right) {
        while (left >= 0 && right < str.length ) {
     
}
console.log(longestPalindrome("bananas"));
//7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
//Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.

function countVowels(str) {
    let count = 0;
    let vowels = 'aeiouAEIOU';
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels('The quick brown fox'));
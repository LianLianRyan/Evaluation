//16. Write a JavaScript function to extract unique characters from a string. 
//Example string: "thequickbrownfoxjumpsoverthelazydog"
//Expected Output: "thequickbrownfxjmpsvlazydg"

function uniqueChars(str) {
    let result = "";
    for (let char of str) {
        if (!result.includes(char)) {
            result += char;
        }
    }
    return result;
}
console.log(uniqueChars("thequickbrownfoxjumpsoverthelazydog"));
//25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 

function longestCountryName(arr) {
    let max_length = 0;
    let result = "";

    for (let country of arr) {
        if (country.length > max_length) {
            max_length = country.length;
            result = country;
        }
    }
    return result;
}
console.log(longestCountryName(["Australia", "Germany", "United States of America"]));
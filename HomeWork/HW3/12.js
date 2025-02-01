//12. Write a JavaScript function which says whether a number is perfect. 
//According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, 
//that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). 
//Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).

function isPerfect(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) sum += i;
    }
    return sum === num;
}
console.log(isPerfect(6));
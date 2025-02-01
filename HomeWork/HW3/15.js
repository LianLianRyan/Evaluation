//15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases.
// Accept b and n from the user and display the result. 

function power(b, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= b;
    }
    return result;
}
console.log(power(2, 3));
//14. Write a JavaScript function to convert an amount to coins. 
//Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
//Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 

function amountToCoins(amount, coins) {
    let result = [];
    for (let coin of coins) {
        while (amount >= coin) {
            result.push(coin);
            amount -= coin;
        }
    }
    return result;
}
console.log(amountToCoins(46, [25, 10, 5, 2, 1]));
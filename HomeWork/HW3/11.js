//11. Write a JavaScript function which will take an array of numbers stored 
//and find the second lowest and second greatest numbers, respectively. 

function secondLowHigh(arr) {
    let uniqueArr = [...new Set(arr)].sort((a, b) => a - b);
    return [uniqueArr[1], uniqueArr[uniqueArr.length - 2]];
}
console.log(secondLowHigh([1, 2, 3, 4, 5]));

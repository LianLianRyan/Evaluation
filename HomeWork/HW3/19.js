//19. Write a JavaScript function that returns array elements larger than a number. 

function largerThan(arr, num) {
    return arr.filter(x => x > num);
}
console.log(largerThan([1, 2, 3, 4, 5], 3));
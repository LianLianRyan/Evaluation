//21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
//Sample array: [1, 2, 3] and subset length is 2 
//Expected output: [[2, 1], [3, 1], [3, 2]]

function subsets(arr, len) {
    let result = [];
    function devide(start, subset) {
        if (subset.length === len) {
            result.push([...subset]);
            return;
        }
        for (let i = start; i < arr.length; i++) {
            devide(i + 1, subset.concat(arr[i]));
        }
    }
    devide(0, []);
    return result;
}
console.log(subsets([1, 2, 3], 2));
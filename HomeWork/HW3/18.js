//18. Write a function for searching JavaScript arrays with a binary search. 
//Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.

function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        target < arr[mid] ? right = mid - 1 : left = mid + 1;
    }
    return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5], 3));
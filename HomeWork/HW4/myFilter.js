Array.prototype.myFilter = function(nums) {

    const result = [];
    
    for (let i = 0; i < this.length; i++) {
        if (nums(this[i])) {
            newArr.push(nums(this[i]));
        }
    }

    return result;
}

const arr = [1, 2, 3, 4, 5];
const filteredArr = arr.myFilter(num => num > 2);
console.log(filteredArr);
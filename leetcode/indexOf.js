var indexOf = function (haystack, needle) {
    if (needle === '') return 0;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack.substr(i, needle.length) === needle) {
            return i;
        }
    }
    return -1;
}

// console.log(indexOf('hello', 'll'));
// console.log(indexOf('flower', 'we'));
// console.log(indexOf('nananana', 'ab'));
// console.log(indexOf('nananana', ''));

// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You may assume no duplicates in the array.
var indexOfArray = function (nums, target) {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (target <= nums[i]) {
            return i;
        }
        if (target > nums[i]) {
            index++;
        }
    }
    return index;
}

console.log(indexOfArray([1, 3, 5, 6], 5));
console.log(indexOfArray([1, 3, 5, 6], 2));
console.log(indexOfArray([1, 3, 5, 6], 7));
console.log(indexOfArray([1, 3, 5, 6], 0));
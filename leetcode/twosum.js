// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

var twoSum = function (nums, target) {
    let indexMap = new Map(), result = [];
    for (let i = 0; i < nums.length; i++) {
        let num0 = nums[i];
        let num1 = target - nums[i];

        if (indexMap.has(num1)) {
            result[0] = indexMap.get(num1);
            result[1] = i
            return result;
        }

        indexMap.set(num0, i);
    }
};

let res = twoSum([1, 3, 4, 6, 7], 9);
console.log(res);
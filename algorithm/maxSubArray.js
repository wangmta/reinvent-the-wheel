// Given an integer array nums, find the contiguous subarray 
// (containing at least one number) which has the largest sum and return its sum.

var maxSubArray = function (nums) {
    let maxCurrent = maxFinal = 0;
    for (let i = 0; i < nums.length; i++) {
        maxCurrent = Math.max(maxCurrent + nums[i], nums[i]);
        maxFinal = Math.max(maxCurrent, maxFinal);
    }
    return maxFinal;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(maxSubArray([6, -3, 4, -1, 2, 1, -5, 4]))
console.log(maxSubArray([5, -3, 5, 3, 6, -4, 3, -5, 6]))
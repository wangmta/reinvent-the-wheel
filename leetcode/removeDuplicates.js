var removeDuplicates = function (nums) {
    // const numSet = new Set(nums);
    // return [...numSet];
    // return Array.from(numSet)

    // const tempMap = {};
    // for (let i = 0; i < nums.length; i++) {
    //     if (!tempMap[nums[i]]) {
    //         tempMap[nums[i]] = nums[i];
    //     }
    // }
    // return Object.values(tempMap);

    // replace Array items in place  array.splice(startIndex, deleteCount, replacedIterable)
    // If you do not specify any replacedIterable, splice() will only remove elements from the array.
    // nums.splice(0, nums.length, ...(new Set(nums)));

    // First pointer
    let i = 0;
    // Second pointer
    for (let j = 1; j < nums.length; j++) {
        // Since it's sorted array, duplicates will be group together
        // When the second pointer move to a value that is different then the first pointer ...
        if (nums[i] !== nums[j]) {
            // First pointer will move to the next index and update the value of second pointer
            i++;
            nums[i] = nums[j];
        }
    }
    return nums.slice(0, i + 1);
};

console.log(removeDuplicates([1, 1, 2, 3, 3, 4, 4]))

var removeElement = function (nums, val) {

    let j = 0;
    while (nums.length !== j) {
        if (nums[j] === val) {
            nums.splice(j, 1);
        } else {
            j++;
            // console.log(j);
        }
        // console.log(nums);
    }
    return j
};

// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);

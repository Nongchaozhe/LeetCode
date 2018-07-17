/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums.sort((a, b) => a - b);
    let flag = 0;
    let len = nums.length;
    if (len == 1) return nums[0];
    for (let i = 1; i < len; i++) {
        if (nums[i] == nums[i - 1]) flag++;
        else if (flag > 0) {
            flag = 0;
            continue;
        } else {
            return nums[i - 1];
        }

    }
    if (flag == 0) return nums[len - 1];
};
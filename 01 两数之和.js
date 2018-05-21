/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let ret = [];
    let a = 0;
    let b = 0;
    if (nums.length > 0) {
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    ret = [i, j];
                    break;
                }
            }
        }
    }
    return ret;
};
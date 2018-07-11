/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 递归，超时
var canPartition0 = function(nums) {
    let sum = 0;
    nums.forEach(item => {
        sum += item;
    });
    if (sum % 2 !== 0) return false;
    return generationPartition(nums, nums.length - 1, sum / 2);

    function generationPartition(nums, index, sum) {
        if (sum === 0) return true;
        if (index < 0 || sum < 0) return false;
        return generationPartition(nums, index - 1, sum) || generationPartition(nums, index - 1, sum - nums[index]);
    }
};
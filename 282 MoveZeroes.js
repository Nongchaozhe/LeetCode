/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let k = 0,
        i = 0;
    // 时间复杂度O(n),空间复杂度O(1)
    // 移动时就进行交换
    for (i; i < nums.length; i++) {
        if (nums[i]) {
            if (i != k) {
                [nums[k], nums[i]] = [nums[i], nums[k]];
                k++;
            } else {
                k++;
            }
        }
    }
};
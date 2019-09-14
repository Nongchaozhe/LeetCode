/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let k = 0,
        i = 0;
    // 时间复杂度O(n),空间复杂度O(1)
    // 移动时就进行交换
    // 遍历到i个元素，[0,i]中，保证[0,k)均为非0元素，[k,i]均为0
    for (i; i < nums.length; i++) {
        if (nums[i]) {
            if (i != k) { //如果整个数组都是0，避免原地交换
                [nums[k], nums[i]] = [nums[i], nums[k]];
                k++;
            } else {
                k++;
            }
        }
    }
};
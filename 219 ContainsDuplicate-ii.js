/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    // 时间复杂度O(n)
    // 空间复杂度O(k)
    // 滑动窗口 + 查找表
    let sKLen = new Set();
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (sKLen.has(element)) {
            return true;
        }
        sKLen.add(element);
        sKLen.size > k;
        sKLen.delete(nums[i - k]);
    }

    return false;
};
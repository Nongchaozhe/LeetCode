/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (nums.length <= 1) return nums.length;
    let ret = new Array(nums.length);
    let maxLen = 1;
    ret[0] = 1;
    for (let i = 1; i < nums.length; i++) {
        ret[i] = 1;
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                ret[i] = Math.max(ret[j] + 1, ret[i]);
            }
        }
        maxLen = Math.max(maxLen, ret[i]);
    }
    return maxLen;
};
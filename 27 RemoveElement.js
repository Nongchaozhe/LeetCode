/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0,
        i = 0;
    let leftLen = nums.length;
    for (i; i < nums.length; i++) {
        if (nums[i] != val) {
            if (k != i) {
                [nums[k], nums[i]] = [nums[i], nums[k]];
            }
            k++;
        } else {
            leftLen--;
        }
    }
    return leftLen;
};
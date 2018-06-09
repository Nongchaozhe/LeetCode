/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let s = new Set();
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (s.has(element)) {
            return true;
        }
        s.add(element);
    }
    return false;
};
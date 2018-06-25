/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (nums == null || nums.length <= 0) return [];

    let ret = [];
    let used = {};
    generatePermution(nums, 0, []);
    return ret;

    // 回溯法
    function generatePermution(nums, start, p) {
        if (p.length == nums.length) {
            ret.push(p.slice(0));
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (!used[i]) {
                used[i] = true;
                p.push(nums[i]);
                generatePermution(nums, start + 1, p);
                p.pop();
                used[i] = false;
            }
        }
        return;
    }
};
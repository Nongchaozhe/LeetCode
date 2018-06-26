/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a, b) => { return a - b; });
    let set = new Set();
    let ret = [];
    for (let i = 0; i <= nums.length; i++) {
        generateSubsets(nums, 0, i, []);
    }
    return ret;

    function generateSubsets(nums, start, len, s) {
        if (s.length == len && !set.has(s.toString())) {
            set.add(s.toString());
            ret.push(s.slice(0));
            return;
        }
        for (let i = start; i < nums.length; i++) {
            if (s.length < len) {
                s.push(nums[i]);
                generateSubsets(nums, i + 1, len, s);
                s.pop();
            } else {
                break;
            }
        }
    }
};
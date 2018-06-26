/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let ret = [];
    generateSubsets(nums, 0, []);
    return ret;

    function generateSubsets(nums, start, s) {
        ret.push([...s]);
        for (let i = start; i < nums.length; i++) {
            s.push(nums[i]);
            generateSubsets(nums, i + 1, s);
            s.pop();
        }
    }
};
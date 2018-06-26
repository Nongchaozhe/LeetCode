/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let ret = [];
    candidates.sort((a, b) => a - b);
    generateCombinationSum(candidates, target, [], 0, 0);
    return ret;

    function generateCombinationSum(nums, target, s, sum, start) {
        if (sum == target) {
            ret.push(s.slice());
            return;
        }

        for (let i = start; i < nums.length && (sum + nums[i]) <= target; i++) {
            s.push(nums[i]);
            generateCombinationSum(nums, target, s, sum + nums[i], i);
            s.pop();
        }
    }
};
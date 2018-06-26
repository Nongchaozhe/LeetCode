/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b);

    let ret = [];
    // let set = new Set();     //最开始不能重复是用s.toString利用set的性质来做
    generateCombinationSum2(candidates, 0, target, 0, []);
    return ret;

    function generateCombinationSum2(nums, start, target, sum, s) {
        if (sum == target) {
            ret.push([...s]); //深拷贝
            return;
        }

        for (let i = start; i < nums.length && (sum + nums[i] <= target); i++) {
            if (i > start && nums[i] === nums[i - 1]) continue; //同层次不能出现相等元素
            s.push(nums[i]);
            generateCombinationSum2(nums, i + 1, target, sum + nums[i], s);
            s.pop()
        }
        return;
    }
};
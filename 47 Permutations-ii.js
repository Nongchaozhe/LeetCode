/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    nums.sort((a, b) => a - b);
    let ret = [];
    let used = {};
    let set = new Set();
    generatePermuteUnique(nums, []);
    return ret;

    function generatePermuteUnique(nums, s) {
        if (s.length == nums.length && !set.has(s.toString())) {
            ret.push([...s]);
            set.add(s.toString());
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (!used[i]) {
                used[i] = true;
                s.push(nums[i]);
                generatePermuteUnique(nums, s);
                s.pop();
                used[i] = false;
            }
        }
    }
};

// 可优化！
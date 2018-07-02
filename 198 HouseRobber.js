/**
 * @param {number[]} nums
 * @return {number}
 */
// 记忆搜索-超时
var rob = function(nums) {
    let memo = new Array(nums.length + 1);
    let max = generateMaxRob(nums, 0);
    return max;

    function generateMaxRob(nums, start) {
        if (start >= nums.length) {
            return 0;
        }

        if (memo[start]) {
            return memo[start];
        }

        let res = 0;
        for (let i = start; i < nums.length; i++) {
            res = Math.max(res, nums[i] + generateMaxRob(nums, i + 2));
            memo[start] = res;
        }

        return res;
    }
};
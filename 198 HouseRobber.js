/**
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划
var rob = function(nums) {
    console.assert(nums != null && nums.length != 0, "nums can't be null")
    let memo = new Array(nums.length + 1);
    memo[0] = nums[0];
    if (nums.length == 1) {
        return memo[0];
    }
    memo[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length; i++) {
        memo[i] = Math.max(memo[i - 1], nums[i] + memo[i - 2]);
    }
    return memo[nums.length - 1];
};


// 记忆搜索 - 超时
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
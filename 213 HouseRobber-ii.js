/**
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划
var rob = function(nums) {
    let memo = new Array(nums.length);
    let maxWithStart = 0;
    let maxWithEnd = 0;

    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    memo[0] = nums[0];
    memo[1] = Math.max(nums[0], nums[1]);
    // [0,nums.length-1)
    for (let i = 2; i < nums.length - 1; i++) {
        memo[i] = Math.max(memo[i - 2] + nums[i], memo[i - 1]);
    }
    maxWithStart = memo[nums.length - 2];

    memo[0] = 0;
    memo[1] = Math.max(0, nums[1]);
    // (0,nums.length-1]
    for (let i = 2; i < nums.length; i++) {
        memo[i] = Math.max(memo[i - 2] + nums[i], memo[i - 1]);
    }
    maxWithEnd = memo[nums.length - 1];

    return Math.max(maxWithStart, maxWithEnd);
};
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    // O(n)复杂度
    let l = 0,
        r = -1; // [l,r]闭区间表示滑动窗口
    let sum = 0;
    let res = nums.length + 1;
    while (l < nums.length) {
        console.log(l, r);
        if ((r + 1) < nums.length && sum < s) {
            r++;
            sum += nums[r];
        } else {
            sum -= nums[l];
            l++;
        }
        if (sum >= s) {
            res = Math.min(res, r - l + 1);
        }
    }

    if (res == nums.length + 1) {
        return 0;
    }
    return res;
};
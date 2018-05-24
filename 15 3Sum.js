/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let ret = [];
    if (!Array.isArray(nums) || nums.length < 3) {
        return ret;
    }　　

    // 排序    　　
    nums.sort(ascSort);
    for (let i = 0; i < nums.length; i++) {
        const first = nums[i];
        if (i && nums[i] === nums[i - 1]) continue;

        let start = i + 1;
        let end = nums.length - 1;
        let target = -first;
        while (start < end) {
            let sum = nums[start] + nums[end];
            if (sum < target) {
                start++;
            } else if (sum > target) {
                end--;
            } else {
                ret.push([first, nums[start], nums[end]]);
                start++;
                end--;

                while (nums[start] === nums[start - 1]) {
                    start++;
                }

                while (nums[end] === nums[end + 1]) {
                    end--;
                }
            }
        }
    }
    return ret;
};

var ascSort = function(x, y) {
    return x - y;
}
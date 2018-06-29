/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let ret = [];
    if (nums === null || nums.length <= 3) return ret;
    nums.sort((a, b) => a - b);

    // 边界情况考虑
    let max = 0
    for (let i = nums.length - 1; i > (nums.length - 5); i--) {
        max += nums[i];
    }
    if (max < target) return [];
    let min = 0
    for (let i = 0; i < 4; i++) {
        min += nums[i];
    }
    if (min > target) return [];

    generateFourSum(0, target, [], 0);
    return ret;

    function generateFourSum(start, target, arr, sum) {
        // console.log(arr, sum, start);
        // 最开始没有转化为3Sum，直接回溯法，超时了
        // if (arr.length == 4 && sum == target) {
        //     console.log(arr);
        //     ret.push([...arr]);
        //     return;
        // }

        if ((nums.length - start) < (4 - arr.length)) return;

        // 转化为3Sum，窗口滑动
        if (arr.length == 2) {
            let l = start;
            let r = nums.length - 1;
            while (l < r) {
                let twoSum = nums[l] + nums[r];
                if (twoSum < (target - sum)) {
                    l++;
                } else if (twoSum > (target - sum)) {
                    r--;
                } else {
                    // 避免重复
                    if (l != start && nums[l] === nums[l - 1]) {
                        l++;
                        r--;
                        continue;
                    }
                    arr.push(nums[l++], nums[r--]);
                    ret.push([...arr]);
                    arr.pop();
                    arr.pop();
                }
            }
            return;
        }

        if (arr.length < 2) {
            for (let i = start; i < nums.length; i++) {
                if (i != start && nums[i] === nums[i - 1]) continue; //剪枝
                arr.push(nums[i]);
                generateFourSum(i + 1, target, arr, nums[i] + sum);
                arr.pop();
            }
        }
        return;
    }
}

// https://leetcode-cn.com/submissions/detail/3611803/
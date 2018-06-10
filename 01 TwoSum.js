/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 暴力
    let ret = [];
    let a = 0;
    let b = 0;
    if (nums.length > 0) {
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    ret = [i, j];
                    break;
                }
            }
        }
    }
    return ret;


    // map存储索引，对撞指针
    let l = 0,
        r = nums.length - 1;
    let map = {};
    nums.forEach((element, index) => {
        map[element] = index;
    });
    nums.sort();
    while (l < r) {
        if (nums[l] + nums[r] < target) {
            l++;
        } else if (nums[l] + nums[r] > target) {
            r--;
        } else {
            return [map[nums[l]], map[nums[r]]];
        }
    }
    return [];
};
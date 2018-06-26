/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a, b) => { return a - b; });
    // let set = new Set(); //去重也可以通过s.toString()利用set的性质达到目的
    let ret = [];
    for (let i = 0; i <= nums.length; i++) {
        generateSubsets(nums, 0, i, []);
    }
    return ret;

    function generateSubsets(nums, start, len, s) {
        if (s.length == len) {
            ret.push([...s]);
            return;
        }
        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i - 1]) continue; //同一层不出现相同元素
            if (s.length < len) {
                s.push(nums[i]);
                generateSubsets(nums, i + 1, len, s);
                s.pop();
            } else {
                break;
            }
        }
    }
};
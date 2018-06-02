/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 1; //[k,i)都是之前出现过的，[i,n)未遍历的
    let k = 1; //[0,k)都是不重复的
    for (i = 1; i < nums.length && k < nums.length;) {
        // [0,k)，有序，元素依次递增，满足[0,k)不重复
        while (k < nums.length && nums[k] > nums[k - 1]) {
            k++;
        }
        i = k + 1;
        // 因为有序，所以nums[i]>nums[k-1]才能使[0,k)范围内元素不重复
        while (i < nums.length && nums[i] <= nums[k - 1]) {
            i++;
        }
        if (i < nums.length) {
            [nums[i], nums[k]] = [nums[k], nums[i]];
            k++;
            i++;
        }
    }
    return k;
};
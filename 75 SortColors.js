/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    // 3路快排
    let zero = -1; //[0,zero]里都是0
    let two = nums.length; //[two,n-1]里都是2
    // (zero,two)里都是1
    for (let i = 0; i < two;) {
        if (nums[i] == 1) i++;
        else if (nums[i] == 0) {
            zero++;
            [nums[i], nums[zero]] = [nums[zero], nums[i]]; //交换过后，i不变
            i++;
        } else if (nums[i] == 2) {
            two--;
            [nums[i], nums[two]] = [nums[two], nums[i]]; //交换过后，i不变
        }
    }
};
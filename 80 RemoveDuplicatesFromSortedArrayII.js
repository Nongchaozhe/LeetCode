/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // 依次遍历后面的数往前填
    let k = 0;
    let count = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[k] === nums[i]) {
            count++;
            if (count <= 2) {
                // count<=2，将i填入k+1
                nums[++k] = nums[i];
            }
        } else {
            count = 1;
            nums[++k] = nums[i];
        }
    }
    return k + 1;
}
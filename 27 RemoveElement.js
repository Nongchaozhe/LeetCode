/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
    let k = 0,
        i = 0;
    let valLen = 0;
    for (i; i < nums.length; i++) {
        if (nums[i] != val) {
            if (k != i) {
                [nums[k], nums[i]] = [nums[i], nums[k]];
            }
            k++;
        } else {
            newLen++;
        }
    }
    return (nums.length - newLen);
}
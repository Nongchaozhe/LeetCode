/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 1;
    let right = height.length;
    let max = 0;
    // 对撞指针解法 时间复杂度O(n)
    while (left != right) {
        let area = (right - left) * Math.min(height[right - 1], height[left - 1])
        max = area > max ? area : max;
        height[right - 1] > height[left - 1] ? left++ : right--;
    }
    return max;
};
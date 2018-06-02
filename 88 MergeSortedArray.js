/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let len = m + n - 1;
    //边界，m=0，n=1的情况
    if (len == 0 && m == 0) {
        nums1[0] = nums2[0]
    }
    m--;
    n--;
    while (n >= 0 && m >= 0) {
        if (nums1[m] >= nums2[n]) {
            nums1[len--] = nums1[m--];
        } else if (nums1[m] < nums2[n]) {
            nums1[len--] = nums2[n--];
        }
    }
    //n还未填完，剩余填进去
    while (n >= 0) {
        nums1[len--] = nums2[n--];
    }
    //m未填完，忽略，本身就是nums1数组元素
};
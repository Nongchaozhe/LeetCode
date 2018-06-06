/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let s = new Set(nums1);
    let ret = [];
    nums2.forEach(element => {
        if (s.has(element)) {
            ret.push(element);
            s.delete(element);
        }
    });
    return ret;
};
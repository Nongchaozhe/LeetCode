/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let m = new Map([]);
    nums1.forEach(element => {
        if (m.has(element)) {
            let n = m.get(element);
            m.set(element, ++n);
        } else {
            m.set(element, 1);
        }
    });

    let ret = [];
    nums2.forEach(element => {
        if (m.has(element)) {
            ret.push(element);
            let n = m.get(element);
            if (n == 1) {
                m.delete(element);
            } else {
                m.set(element, --n);
            }
        }
    });
    return ret;
};


// [1,2,3,4,5,6],[3,4,4] 有序
// 小很多的话，排序，小的元素为要查找元素，逐个二分查找？
function intersectOrder(nums1, nums2) {
    let i = 0,
        j = 0;
    let ret = [];
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            i++;
        } else if (nums1[i] > nums2[j]) {
            j++;
        } else {
            ret.push(nums1[i]);
            i++;
            j++;
        }
    }
    console.log(ret);
    return ret;
}
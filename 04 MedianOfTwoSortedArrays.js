/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let len1 = nums1.length;
    let len2 = nums2.length;
    if (len1 == 0 && len1 == len2) {
        return 0;
    }

    let allLen = len1 + len2;
    if (allLen % 2 == 1) {
        let ret = findKth(nums1, 0, nums2, 0, parseInt(allLen / 2) + 1)
            // console.log('!' + ret);
        return ret;
    } else {
        let ret = (findKth(nums1, 0, nums2, 0, allLen / 2) + findKth(nums1, 0, nums2, 0, allLen / 2 + 1)) / 2;
        // console.log('~' + ret);
        return ret;
    }
};

// k表示要找的第k个元素
function findKth(nums1, begin1, nums2, begin2, k) {
    // console.log(begin1, begin2, k);

    // nums1长度小于nums2
    if ((nums1.length - begin1) > (nums2.length - begin2)) {
        return findKth(nums2, begin2, nums1, begin1, k);
    }

    // s是否为空，为空，直接找另一个数组的第k个
    if (nums1.length == begin1) {
        return nums2[k + begin2 - 1];
    }

    // 当K=1时，找的为第一个，比较两个元素的首元素
    if (k == 1) {
        // console.log(Math.min(nums1[begin1], nums2[begin2]))
        return Math.min(nums1[begin1], nums2[begin2]);
    }

    let pa = Math.min(begin1 + parseInt(k / 2), nums1.length);
    let pb = begin2 + k - pa + begin1;
    // console.log('~~~', pa, pb);
    if (nums1[pa - 1] < nums2[pb - 1]) {
        return findKth(nums1, pa, nums2, begin2, k - pa + begin1);
    } else if (nums1[pa - 1] > nums2[pb - 1]) {
        return findKth(nums1, begin1, nums2, pb, k - pb + begin2);
    } else {
        return nums1[pa - 1];
    }
};
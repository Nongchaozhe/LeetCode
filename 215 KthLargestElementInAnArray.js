/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    QSort(nums, 0, nums.length - 1);
    if (k >= 1 && k <= nums.length) {
        return nums[nums.length - k];
    }
};

function QSort(nums, l, r) {
    if (l > r) {
        return;
    }
    let i = l,
        j = r;
    let temp = nums[l];
    while (i < j) {
        while (i < j && nums[j] > temp) {
            j--;
        }

        if (i < j) {
            nums[i] = nums[j];
        }

        while (i < j && nums[i] <= temp) {
            i++;
        }
        if (i < j) {
            nums[j] = nums[i];
        }
    }

    nums[i] = temp;
    QSort(nums, i + 1, r);
    QSort(nums, l, i - 1);
};
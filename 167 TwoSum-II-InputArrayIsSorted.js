/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    //时间复杂度 O(nlogn)
    /*
    for (let i = 0; i < numbers.length - 1; i++) {
        const nums1 = numbers[i];
        const nums2 = target - nums1;

        // 利用有序，二分查找
        let start = i + 1;
        let end = numbers.length - 1;
        while (start <= end) {
            mid = parseInt((start + end) / 2)
            if (numbers[mid] < nums2) {
                start = mid + 1;
            } else if (numbers[mid] > nums2) {
                end = mid - 1;
            } else {
                break;
            }
        }

        if (start <= end) {
            return [i + 1, mid + 1];
        }
    }
    */

    // 时间复杂度 O(n)  对撞指针解法
    let left = 0,
        right = numbers.length - 1;
    while (left < right) {
        if (numbers[left] + numbers[right] == target) {
            return [left + 1, right + 1]
        } else if (numbers[left] + numbers[right] < target) {
            left++;
        } else {
            right--;
        }
    }
    throw 'no solution';

};
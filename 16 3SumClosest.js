/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    // 三层for循环时间复杂度过高了
    // if (!Array.isArray(nums) || nums.length < 3) {
    //     return 0;
    // }
    // let ret = nums[0] + nums[1] + nums[2];
    // for (let i = 0; i < nums.length; i++) {
    //     const first = nums[i];
    //     for (let j = i + 1; j < nums.length; j++) {
    //         const second = nums[j];
    //         for (let k = j + 1; k < nums.length; k++) {
    //             const third = nums[k];
    //             ret = (Math.abs(first + second + third - target) < Math.abs(ret - target)) ? (first + second + third) : ret;
    //         }
    //     }
    // }

    // return ret;

    // 先排序，后对撞指针。 运行时间超过100%
    QSort(nums, 0, nums.length - 1);
    let n = nums.length;
    let ret = nums[0] + nums[1] + nums[nums.length - 1];
    for (let i = 0; i < n; i++) {
        let l = i + 1;
        let r = n - 1;
        while (l < r) {
            ret = (Math.abs(nums[l] + nums[r] + nums[i] - target) < Math.abs(ret - target)) ? (nums[l] + nums[r] + nums[i]) : ret;
            if ((nums[l] + nums[r] + nums[i]) < target) {
                l++;
            } else if ((nums[l] + nums[r] + nums[i]) > target) {
                r--;
            } else {
                return target;
            }
        }
    }
    return ret;
};

function QSort(nums, l, r) {
    if (l >= r) {
        return;
    }
    let i = l,
        j = r;
    let temp = nums[i];
    while (i < j) {
        while (i < j && nums[j] > temp) {
            j--;
        }

        if (i < j) {
            nums[i] = nums[j];
            i++;
        }

        while (i < j && nums[i] <= temp) {
            i++;
        }

        if (i < j) {
            nums[j] = nums[i];
            j--;
        }
    }
    nums[i] = temp;
    QSort(nums, i + 1, r);
    QSort(nums, l, i - 1);
}
function heapSort(nums, n) {
    // heapify
    for (let i = parseInt((n - 1) / 2); i >= 0; i--) {
        shiftDown(nums, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
        // 最大的元素与最后一个元素交换
        [nums[0], nums[i]] = [nums[i], nums[0]];
        // shiftDown
        shiftDown(nums, i, 0);
    }
}

function shiftDown(nums, n, k) {
    while (2 * k + 1 < n) {
        let j = 2 * k + 1; //此次循环，nums[k]与nums[j]交换位置
        if (j + 1 < n && nums[j + 1] > nums[j]) {
            j++;
        }

        if (nums[k] >= nums[j]) break;

        [nums[k], nums[j]] = [nums[j], nums[k]];
        k = j;
    }
}

let nums = [1, 2, -1, 0, 3, 5];
heapSort(nums, nums.length);
console.log(nums);
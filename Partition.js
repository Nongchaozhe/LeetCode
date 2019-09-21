function partition(nums, start, end) {
    if (!nums || end <= start || start < 0 || end >= nums.length) {
        return -1;
    }
    let index = Math.round(Math.random() * (end - start) + start);

    let temp = nums[index];
    [nums[index], nums[start]] = [nums[start], nums[index]];
    while (start < end) {
        while (start < end && nums[end] >= temp) end--;

        if (start < end) {
            nums[start] = nums[end];
            start++;
        }

        while (start < end && nums[start] < temp) start++;

        if (start < end) {
            nums[end] = nums[start];
        }
    }
    nums[start] = temp;
    return start;
}

function QS(nums, start, end) {
    if (!nums || nums.length <= 1 || start >= end) return;

    let index = partition(nums, start, end);
    if (index > start) QS(nums, start, index - 1);
    if (index < end) QS(nums, index + 1, end);
}

let nums = [2, 6, 66, -1, 88, 9, 10, -66];
QS(nums, 0, nums.length - 1);
console.log(nums);
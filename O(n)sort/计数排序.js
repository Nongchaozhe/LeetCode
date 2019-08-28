function countSort(nums) {
    if (nums.length <= 1) return;

    let max = nums[0];
    let min = nums[0];
    for (let i = 1; i < nums.length; i++) {
        max = nums[i] <= max ? max : nums[i];
        min = nums[i] >= min ? min : nums[i];
    }

    // 计算偏移量
    let offset = 0 - min;

    // 初始化计数数组
    let count = new Array(max - min + 1);
    for (let i = 0; i < count.length; i++) count[i] = 0;

    // 计数：各个元素出现的次数
    for (let i = 0; i < nums.length; i++) {
        count[nums[i] + offset]++;
    }

    // 还原排序数组
    let index = 0;
    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            nums[index] = i - offset;
            index++;
            count[i]--;
        }
    }
}

let array = [-1, 3, 1, 1, 18, 8, 28, -11, 7];
countSort(array);
console.log(array);
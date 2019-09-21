function partition(nums, left, right) {
    if (!nums || nums.length <= 0 || left >= right || left < 0 || right >= nums.length) return left;

    let index = left;
    let temp = nums[index];
    while (left < right) {
        while (left < right && nums[right] >= temp) right--;

        if (left < right) nums[left] = nums[right];

        while (left < right && nums[left] < temp) left++;

        if (left < right) nums[right] = nums[left];
    }
    nums[left] = temp;
    return left;
}

function MoreThanHalfNum_Solution(numbers) {
    // if (!numbers || numbers.length <= 0) return 0;

    // let left = 0,
    //     right = numbers.length - 1;
    // let index = partition(numbers, left, right);
    // let mid = parseInt((right - left) / 2);
    // while (mid != index) {
    //     if (index > mid) index = partition(numbers, left, index - 1);
    //     else if (index < mid) index = partition(numbers, index + 1, right);
    // }

    // // 确认index所在的元素，是否出现次数超过index
    // let count = 0;
    // for (let i = 0; i < numbers.length; i++) {
    //     if (numbers[i] == numbers[index]) count++;
    // }

    // if (count > (parseInt(numbers.length / 2))) return numbers[index];
    // return 0;


    //利用map求解
    if (!numbers || numbers.length <= 0) return 0;
    let map = new Map();
    let i = 0;
    for (i = 0; i < numbers.length; i++) {
        let count = 0;
        if (map.has(numbers[i])) {
            count = map.get(numbers[i]);
            count++;
            map.set(numbers[i], count);
        } else {
            count = 1;
            map.set(numbers[i], 1);
        }
        if (count > parseInt(numbers.length / 2)) break;
    }

    if (i == numbers.length) return 0;
    return numbers[i];
}


console.log(MoreThanHalfNum_Solution([1, 1, 1, 1, 2, 3]));
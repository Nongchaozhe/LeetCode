/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let ret = [];
    if (!Array.isArray(nums) || nums.length < 3) {
        return ret;
    }　　

    // 排序    　　
    nums.sort(ascSort);
    for (let i = 0; i < nums.length; i++) {
        const first = nums[i];
        if (i && nums[i] === nums[i - 1]) continue;

        let start = i + 1;
        let end = nums.length - 1;
        let target = -first;
        while (start < end) {
            let sum = nums[start] + nums[end];
            if (sum < target) {
                start++;
            } else if (sum > target) {
                end--;
            } else {
                ret.push([first, nums[start], nums[end]]);
                start++;
                end--;

                while (nums[start] === nums[start - 1]) {
                    start++;
                }

                while (nums[end] === nums[end + 1]) {
                    end--;
                }
            }
        }
    }
    return ret;
};

var ascSort = function(x, y) {
    return x - y;
}

/*
 最开始的写法是，双层for循环+二分查找
 再去重
 去重踩了一点坑：
 */
var distinct = function(nums) {
    let ret = [];
    for (let i = 0; i < nums.length; i++) {
        const first = nums[i];
        let j = 0;
        for (j; j < i; j++) {
            const second = nums[j];
            /*
             数组不能直接==   http://www.cnblogs.com/-867259206/p/6795354.html
             可用toString，但不是严谨的，因为如果'1',1应该不相等的，toString就想等了
             console.log(first, second, second == first, first.toString() == second.toString());
             已经排序过，长度也相等，且知道每一项都是number，否则需要先排序再toString。最严谨的还是one by one
             if (first.toString() === second.toString()) {

            结果toString耗时非常严重，
            [-13, 11, 11, 0, -5, -14, 12, -11, -11, -14, -3, 0, -3, 12, -1, -9, -5, -13, 9, -7, -2, 9, -1, 4, -6, -13, -7, 10, 10, 9, 7, 13, 5, 4, -2, 7, 5, -13, 11, 10, -12, -14, -5, -8, 13, 2, -2, -14, 4, -8, -6, -13, 9, 8, 6, 10, 2, 6, 5, -10, 0, -11, -12, 12, 8, -7, -4, -9, -13, -7, 8, 12, -14, 10, -10, 14, -3, 3, -15, -14, 3, -14, 10, -11, 1, 1, 14, -11, 14, 4, -6, -1, 0, -11, -12, -14, -11, 0, 14, -9, 0, 7, -12, 1, -6]
            超时，无法通过该用例400ms+
            换成直接比较每一项，直接70-80ms
            */
            if (first[0] === second[0] && first[1] === second[1] && first[2] === second[2]) {
                break;
            }
        }
        if (j == i) {
            ret.push(nums[i]);
        }
    }
    return ret;
}

// 但是toString耗时查出来，仍然无法通过最后的很长的测试case
// 最后才想到上面的解法，在循环的时候就应该考虑到去重！这才通过
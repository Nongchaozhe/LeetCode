/**
 * 将两个(两个以上的有序表合并成一个新的有序表)
 * 即将带排序序列分为若干个子序列，每个子序列有序，再把有序子序列合并为整体有序序列
 * 
 * 时间复杂度O(nlogn)，稳定排序算法
 */
// 子序列有序，向上合并达到整体有序
// 合并时需要O(n)的额外空间

function MS(nums, L, R) {
    if (L >= R) return;
    /*
    当递归到数组长度非常小时，可以采用插入排序，近乎有序的概率会更高
    当数组近乎有序时，插入排序的时间效率要更高
    这个优化点在各种排序中都可以用
    if(R-L<=15) insertionSort(nums,L,R);
    */

    let mid = parseInt((R + L) / 2);
    MS(nums, L, mid);
    MS(nums, mid + 1, R);
    // 优化点,两边都是有的，如果右边最小已经大于左边最大，就不用merge了
    if (nums[mid + 1] > nums[mid]) return;
    merge(nums, L, mid, R);
}

function merge(nums, L, mid, R) {
    if (L == R) return;
    let LArr = new Array(mid - L + 1);
    for (let i = L; i <= mid; i++) {
        LArr[i - L] = nums[i];
    }

    let i = L;
    let j = mid + 1;
    let k = L;
    for (k = L; k <= R; k++) {
        if (i > mid || j > R) break;
        if (LArr[i - L] < nums[j]) {
            nums[k] = LArr[i - L];
            i++;
        } else {
            nums[k] = nums[j];
            j++;
        }
    }
    while (i <= mid) {
        nums[k++] = LArr[i - L];
        i++;
    }
}

// 还有一个优化，上面的是自顶向下的排序。
// 我们可以采用自底向上进行排序

let nums = [2, 1, -1, -1, -5, 2];
MS(nums, 0, nums.length - 1);
console.log(nums);
function QS(nums, L, R) {
    if (L >= R) return;
    let i = L,
        j = R,
        temp = nums[i];
    while (i < j) {
        while (i < j && nums[j] >= temp) {
            j--;
        }
        if (i < j) {
            nums[i] = nums[j];
            i++;
        }

        while (i < j && nums[i] < temp) {
            i++;
        }
        if (i < j) {
            nums[j] = nums[i];
            j--;
        }
    }
    nums[i] = temp;
    QS(nums, L, i - 1);
    QS(nums, i + 1, R);
}

function MS(nums, L, R) {
    if (L >= R) return;

    let mid = parseInt((L + R) / 2);
    MS(nums, L, mid);
    MS(nums, mid + 1, R);
    merge(nums, L, mid, R);
}

function merge(nums, L, mid, R) {
    if (R <= L) return;
    let LArr = new Array(mid - L + 1);
    for (let i = L; i <= mid; i++) {
        LArr[i - L] = nums[i];
    }
    let i = L,
        j = mid + 1,
        k = L;
    for (k; k <= R; k++) {
        if (i > mid || j > R) break;
        if (LArr[i - L] <= nums[j]) {
            nums[k] = LArr[i - L];
            i++;
        } else {
            nums[k] = nums[j];
            j++;
        }
    }

    while (i <= mid) {
        nums[k] = LArr[i - L];
        k++;
        i++;
    }
}

function shiftDown(nums, i, n) {
    // n 为边界不可等
    while (i * 2 + 1 < n) {
        let j = i * 2 + 1; //此次循环交换值
        // j+1存在且nums[j+1]>nums[j]，j++
        if (j + 1 < n && nums[j + 1] > nums[j]) {
            j++;
        }

        if (nums[i] >= nums[j]) break;
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i = j;
    }
}

function heapSort(nums) {
    let count = nums.length;

    for (let i = parseInt((count - 1) / 2); i >= 0; i--) {
        shiftDown(nums, i, count);
    }

    for (let i = count - 1; i > 0; i--) {
        [nums[i], nums[0]] = [nums[0], nums[i]];
        shiftDown(nums, 0, i); //数组长度传i,前一轮交换，已经使第i个数是最大值
    }
}

let nums = [8, 1, -1, 0, -5, 2];
// QS(nums, 0, nums.length - 1);
// MS(nums, 0, nums.length - 1);
heapSort(nums);
console.log(nums);
// 23:10
// 23:22
// cost 12min

function selectSort(nums, n) {
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[j] >= nums[i]) continue;
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }
}

function insertSort(nums, n) {
    for (let i = 1; i < n; i++) {
        let k = i;
        for (let j = i - 1; j >= 0; j--) {
            if (nums[j] <= nums[k]) break;
            [nums[k], nums[j]] = [nums[j], nums[k]];
            k = j;
        }
    }
}

function merge(nums, L, mid, R) {
    if (L >= R) return;
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
        k++, i++;
    }

}

function MS(nums, L, R) {
    if (L >= R) return;
    let mid = parseInt((L + R) / 2);
    MS(nums, L, mid);
    MS(nums, mid + 1, R);
    merge(nums, L, mid, R);
}

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

function shiftDown(nums, i, n) {
    while (i * 2 + 1 < n) {
        let j = i * 2 + 1;
        if (j + 1 < n && nums[j + 1] > nums[j]) {
            j++;
        }

        if (nums[i] >= nums[j]) break;
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i = j;
    }
}

function headSort(nums, n) {
    for (let i = parseInt(n / 2) - 1; i >= 0; i--) {
        shiftDown(nums, i, n);
    }

    for (let i = n - 1; i > 0; i--) {
        [nums[0], nums[i]] = [nums[i], nums[0]];
        shiftDown(nums, 0, i);
    }
}

let nums = [8, 1, 3, 18, 0, 7, 5, 0];
// selectSort(nums, nums.length);
// insertSort(nums, nums.length);
MS(nums, 0, nums.length - 1);
// QS(nums, 0, nums.length - 1);
// headSort(nums, nums.length);
console.log(nums);
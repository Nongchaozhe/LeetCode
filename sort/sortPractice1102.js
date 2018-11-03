// 11:01
// 11:20

function selectSort(nums, n) {
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] <= nums[j]) continue;
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }
}

function insertSort(nums, n) {
    for (let i = 1; i < n; i++) {
        let k = i;
        for (let j = i - 1; j >= 0; j--) {
            if (nums[j] <= nums[k]) break;
            [nums[j], nums[k]] = [nums[k], nums[j]];
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
        k = L,
        j = mid + 1;
    while (k <= mid && j <= R) {
        if (nums[j] <= LArr[k - L]) {
            nums[i] = nums[j];
            j++, i++;
        } else {
            nums[i] = LArr[k - L];
            k++, i++;
        }
    }

    while (k <= mid) {
        nums[i] = LArr[k - L];
        i++, k++;
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
    let l = L,
        r = R,
        temp = nums[l];
    while (l < r) {
        while (l < r && nums[r] >= temp) {
            r--;
        }

        if (l < r) {
            nums[l] = nums[r];
            l++;
        }

        while (l < r && nums[l] < temp) {
            l++;
        }

        if (l < r) {
            nums[r] = nums[l];
            r--;
        }
    }

    nums[l] = temp;
    QS(nums, L, l - 1);
    QS(nums, l + 1, R);

}

function shiftDown(nums, i, n) {
    while (2 * i + 1 < n) {
        let j = 2 * i + 1;
        if (j + 1 < n && nums[j + 1] > nums[j]) j++;

        if (nums[i] > nums[j]) break;
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

let nums = [88, -18, 11, 1, 2018, 0, 0, 1];
// selectSort(nums, nums.length);
insertSort(nums, nums.length);
// MS(nums, 0, nums.length - 1);
// QS(nums, 0, nums.length - 1);
// headSort(nums, nums.length);
console.log(nums);
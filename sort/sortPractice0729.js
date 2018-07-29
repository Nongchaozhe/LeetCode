// 22:27
// 22:47
// cost 20min

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
        }
    }
    nums[i] = temp;
    QS(nums, L, i - 1);
    QS(nums, i + 1, R);
}

function selectSort(nums, n) {
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[j] < nums[i]) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
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

function MS(nums, L, R) {
    if (L >= R) return;

    let mid = parseInt((L + R) / 2);
    MS(nums, L, mid);
    MS(nums, mid + 1, R);
    merge(nums, L, mid, R);
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
        if (LArr[i - L] >= nums[j]) {
            nums[k] = nums[j];
            j++;
        } else {
            nums[k] = LArr[i - L];
            i++;
        }
    }

    while (i <= mid) {
        nums[k] = LArr[i - L];
        i++;
        k++;
    }
}

function shiftDown(nums, i, n) {
    while (2 * i + 1 < n) {
        let j = 2 * i + 1;
        if (j + 1 < n && nums[j + 1] > nums[j]) {
            j++;
        }

        if (nums[i] >= nums[j]) return;
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i = j;
    }
}

function headSort(nums) {
    let n = nums.length;
    for (let i = parseInt(n / 2) - 1; i >= 0; i--) {
        shiftDown(nums, i, n);
    }

    for (let i = n - 1; i > 0; i--) {
        [nums[0], nums[i]] = [nums[i], nums[0]];
        shiftDown(nums, 0, i);
    }
}


let nums = [-1, -3, -3, 9, 2, 11, -9, 10];
// QS(nums, 0, nums.length - 1);
// selectSort(nums, nums.length);
// insertSort(nums, nums.length);
// MS(nums, 0, nums.length - 1);
headSort(nums);
console.log(nums);
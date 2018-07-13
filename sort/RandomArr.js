function generateRandomArray(n, rangeL, rangeR) {
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = rangeL + Math.round(Math.random() * (rangeR - rangeL));
    }
    return arr;
}

function generateNearlyOrderedArray(n, swapTimes) {
    let arr = new Array(n);
    for (let i = 0; i < n; i++)
        arr[i] = i;

    for (let i = 0; i < swapTimes; i++) {
        let positionA = Math.round(Math.random() * (n - 1));
        let positionB = Math.round(Math.random() * (n - 1));
        [arr[positionA], arr[positionB]] = [arr[positionB], arr[positionA]]
    }
    return arr;
}


function isSorted(arr, n) {
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

// 选择排序
function selectionSort(arr, n) {
    for (let i = 0; i < n; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) minIndex = j;
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
}

// 插入排序和选择排序的最大区别是，插入排序的第二层循环是可以提前结束的
function insertionSort(arr, n) {
    // for (let i = 1; i < n; i++) {
    //     // 选择arr[i]合适的位置插入
    //     for (let j = i; j > 0; j--) {
    //         if (arr[j] < arr[j - 1])
    //             [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    //         else
    //             break;
    //     }
    // }

    // 只交换一次
    for (let i = 1; i < n; i++) {
        let temp = arr[i];
        // 选择arr[i]合适的位置插入
        let j = i;
        for (; j > 0; j--) {
            if (arr[j - 1] > temp) {
                arr[j] = arr[j - 1];
            } else {
                break;
            }
        }
        arr[j] = temp;
    }
}

/*
按照插入排序的循环会提前终止内循环的case，算法运行时间相对选择排序应该更短才对
而实际上却更长了，性能更差了
    - 原因在于：每一次遍历都在交换，交换的效率要小于选择排序中的赋值(选择排序一次i遍历只交换一次)

选择排序算法改进：只交换一次

改进之后，会发现，插入排序的算法效率是比选择排序更高的

而且，当一个数组，近乎有序的时候，插入排序的效率要远远的高于选择排序

而且，如果这个数组的取值范围小，近乎有，甚至其效率比 nlogn 级别的排序算法更高！

再进一步，如果需要排序的数组，是完全有序数组，那么插入排序会演变成一个 O(n) 级别的算法！
*/

let arr1 = generateRandomArray(10000, 2, 10000);
let arr2 = generateNearlyOrderedArray(10000, 5);
// console.log(arr2);
testSort(arr1, 10000);
// console.log(arr1);



function testSort(arr, n) {
    let start = new Date().getTime();
    selectionSort(arr, n);
    // insertionSort(arr, n);
    let end = new Date().getTime();

    console.log(isSorted(arr, n));
    console.log('运行时间:' + (end - start) / 1000);
}
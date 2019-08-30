function radixSort(arr, maxDigit) {
    let mod = 10;
    let dev = 1;
    let counter = [];
    for (let i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
        for (let j = 0; j < arr.length; j++) {
            let bucketIdx = parseInt((arr[j] % mod) / dev);
            if (counter[bucketIdx] == null) {
                counter[bucketIdx] = [];
            }

            counter[bucketIdx].push(arr[j]);
        }

        let idx = 0;
        for (let j = 0; j < counter.length; j++) {
            let bucket = counter[j];
            if (bucket != null) {
                for (let k = 0; k < bucket.length; k++) {
                    arr[idx++] = bucket[k];
                }
            }
        }

        counter = []; //清空
    }
}

var array = [12, 123, 18, 18, 30, 1, 0, 1];
radixSort(array, 3);
console.log(array);
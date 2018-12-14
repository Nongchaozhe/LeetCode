/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1.length == 0 || num2.length == 0) return '';
    if (num1 === '0' || num2 === '0') return '0';

    let l1 = num1.length - 1;
    let l2 = num2.length - 1;
    let retArr = new Array(l1 + l2 + 2).fill(0);

    let base = '0'.charCodeAt();
    for (let i = l1; i >= 0; i--) {
        for (let j = l2; j >= 0; j--) {
            let muti = (num1[i].charCodeAt() - base) * (num2[j].charCodeAt() - base);
            muti += retArr[i + j + 1];

            retArr[i + j + 1] = muti % 10;
            retArr[i + j] += parseInt(muti / 10);

        }
    }

    let flag = false;
    let retStr = '';
    let index = 0;
    while (!flag) {
        if (retArr[index] != 0) {
            flag = true;
        } else {
            index++;
        }
    }
    while (index < retArr.length) {
        retStr += retArr[index++];
    }
    return retStr;
};


console.log(multiply('0', '0'));
console.log(multiply('123', '456'));
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    let numArr = [];
    let index = 0;
    while (x != 0) {
        numArr[index] = x % 10;
        x = parseInt(x / 10);
        index++
    }
    let max = numArr.length - 1;
    let middle = (max % 2 == 1) ? ((max + 1) / 2) : (max / 2);
    for (let index = 0; index < middle; index++) {
        if (numArr[index] != numArr[max]) {
            return false;
        }
        max--;
    }
    return true;
};
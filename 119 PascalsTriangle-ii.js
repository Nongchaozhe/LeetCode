/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let ret = new Array(rowIndex + 1);
    for (let i = 0; i <= rowIndex; i++) {
        for (let j = i; j >= 0; j--) {
            if (j === 0 || j === i) ret[j] = 1;
            else ret[j] = ret[j] + ret[j - 1];
        }
    }
    return ret;
};
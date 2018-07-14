/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows <= 0) return [];
    let ret = new Array(numRows);
    ret[0] = [1];
    for (let i = 1; i < numRows; i++) {
        ret[i] = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) ret[i][j] = 1;
            else ret[i][j] = ret[i - 1][j] + ret[i - 1][j - 1];
        }
    }
    return ret;
};
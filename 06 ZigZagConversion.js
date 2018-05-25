/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let i = 0;
    let ret = "";
    if (s.length <= numRows || numRows <= 1) {
        return s;
    }
    for (i; i < numRows; i++) {
        let j = i;
        let flag = 1;
        if (i == 0 || i == (numRows - 1)) {
            while (j < s.length) {
                ret += s[j];
                // console.log(ret);
                j += ((numRows - 1) * 2)
            }
        } else {
            while (j < s.length) {
                ret += s[j];
                // console.log(ret);
                if (flag) {
                    j += ((numRows - i - 1) * 2);
                } else {
                    j += (2 * i)
                }
                flag = !flag;
            }
        }
    }
    // console.log(ret);
    return ret;
};
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let i = s.length - 1;
    let ret = 0;
    while (s[i] == ' ') i--;
    for (; i >= 0; i--) {
        if (s[i] === ' ') break;
        ret++;
        continue;
    }
    return ret;
};
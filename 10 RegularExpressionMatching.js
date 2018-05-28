/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let pattern = '^' + p + '$';
    let regExp = new RegExp(pattern, 'g');
    return regExp.test(s);
};
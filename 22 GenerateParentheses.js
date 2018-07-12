/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let ret = [];
    generate(n, n, '');
    return ret;

    function generate(left, right, s) {
        if (left === 0 && right === 0) {
            ret.push(s);
            return;
        }

        if (left > right) return;
        if (left < right) {
            if (left != 0) generate(left - 1, right, s + '(');
            generate(left, right - 1, s + ')');
        }
        if (left == right) {
            generate(left - 1, right, s + '(');
        }
    }
};
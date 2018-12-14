/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    let arr = str.split(' ').filter((s) => {
        return !!s.length;
    });
    return arr.reverse().join(' ');
};
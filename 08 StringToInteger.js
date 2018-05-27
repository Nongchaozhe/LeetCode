/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    if (isNaN(parseInt(str))) {
        return 0;
    }
    str = parseInt(str);
    str = str > (Math.pow(2, 31) - 1) ? (Math.pow(2, 31) - 1) : str;
    str = str < -Math.pow(2, 31) ? -Math.pow(2, 31) : str;
    return str;
};
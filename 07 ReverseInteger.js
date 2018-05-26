/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var numStr = x < 0 ? x.toString().substring(1) : x.toString();
    var numArr = numStr.split('');
    numArr.reverse();
    numStr = numArr.join('');
    numStr = Number((x < 0 ? '-' : '') + (numStr));
    return numStr > Math.pow(2, 31) - 1 || numStr < -Math.pow(2, 31) ? 0 : numStr;
};
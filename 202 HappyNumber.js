/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let ret = [];
    let s = new Set();
    let temp = 0;
    while (!s.has(temp) && temp != 1) {
        s.add(temp);
        temp = 0;
        while (n) {
            temp += Math.pow(n % 10, 2);
            n = parseInt(n / 10);
        }
        n = temp;
    }
    if (temp === 1) {
        return true;
    } else {
        return false;
    }
};
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var numList = [1000, 500, 100, 50, 10, 5, 1];
    var romeList = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];

    let pre = romeMatchNum(s[0]);
    let temp = pre;
    let ret = 0;
    for (let i = 1; i < s.length; i++) {
        const next = romeMatchNum(s[i])
            // console.log(pre, next, i);
        if (pre < next) {
            temp = next - temp;
        } else if (pre > next) {
            ret += temp;
            temp = next;
        } else {
            ret += next;
        }
        pre = next;
    }
    ret += temp;

    return ret;
};

var romeMatchNum = function(c) {
    switch (c) {
        case 'M':
            return 1000;
            break;
        case 'D':
            return 500;
            break;
        case 'C':
            return 100;
            break;
        case 'L':
            return 50;
            break;
        case 'X':
            return 10;
            break;
        case 'V':
            return 5;
            break;
        case 'I':
            return 1;
            break;

        default:
            return 0;
            break;
    }
};
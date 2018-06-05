/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    /*
    let l = 0;
    let r = s.length - 1;
    let arr = s.split('');
    while (l < r) {
        [arr[l], arr[r]] = [arr[r], arr[l]];
        r--;
        l++;
    }
    return arr.join('');
    */


    // 空间复杂度O(1)
    let len = s.length - 1;
    let ret = '';
    while (len >= 0) {
        ret += s[len--];
    }
    return ret;

    // 直接用js封装方法
    // return s.split('').reverse().join('');
};
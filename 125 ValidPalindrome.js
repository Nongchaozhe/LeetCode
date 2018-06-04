/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s.length == 0 || s.length == 1) {
        return true;
    }

    let l = 0,
        r = s.length - 1;
    s = s.toLowerCase();
    while (l < r) {
        if (!/[A-Za-z0-9]/.test(s[l])) {
            l++;
            continue;
        }
        if (!/[A-Za-z0-9]/.test(s[r])) {
            r--;
            continue;
        }

        if (s[l] == s[r]) {
            l++;
            r--;
        } else {
            return false;
        }
    }

    if (l >= r) {
        return true;
    }
};
/* 当然也可以利用js已封装的方法
str = str.replace(/\W\s_/gi,'');
return str.toLowerCase == str.split('').reverse().join('').toLowerCase();
*/
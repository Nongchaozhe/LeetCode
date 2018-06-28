/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let ret = [];
    generatePartition(s, []);
    return ret;

    function generatePartition(str, arr) {
        if (str.length == 0) {
            ret.push(arr.slice());
            return;
        }

        // 每个字符串从长度为1-n子字符串，且为回文时，继续查找剩余子字符串
        for (let i = 0; i < str.length; i++) {
            if (isPalindrome(str.substring(0, i + 1))) {
                arr.push(str.substring(0, i + 1));
                generatePartition(str.substring(i + 1), arr);
                arr.pop();
            }
        }
        return;
    }

    function isPalindrome(str) {
        let l = 0,
            r = str.length - 1;
        while (l <= r) {
            if (str[l] == str[r]) {
                l++;
                r--;
                continue;
            } else {
                return false;
            }
        }
        return true;
    }
};
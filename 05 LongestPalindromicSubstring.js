/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let i = 0;
    let maxLen = 1;
    let maxStr = "";
    // 奇数。中间往两边扩散
    for (i; i < s.length; i++) {
        let j = 1;
        if (maxLen == 1) {
            maxStr = s[i];
        }
        for (j; j + i < s.length && i - j >= 0; j++) {
            if (s[i - j] == s[i + j]) {
                if ((1 + j * 2) > maxLen) {
                    maxLen = (1 + j * 2);
                    maxStr = s.substring(i - j, i + j + 1);
                }
            } else {
                break;
            }
        }
    }

    // 偶数
    for (i = 0; i < s.length; i++) {
        //不需要往前，还是往后  i=i+1的情况就好了。任何case都能覆盖
        if (i + 1 < s.length && s[i] == s[i + 1]) {
            if (2 > maxLen) {
                maxStr = s.substring(i, i + 2);
                maxLen = 2;
            }
            for (j = 1;
                (j + i + 1) < s.length && (i - j) >= 0; j++) {
                if (s[j + i + 1] == s[i - j]) {
                    if ((2 + j * 2) > maxLen) {
                        maxStr = s.substring(i - j, i + j + 2);
                        maxLen = (2 + j * 2);
                        console.log(maxStr, s);
                    }
                } else {
                    break;
                }
            }
        }
    }
    return maxStr;
};
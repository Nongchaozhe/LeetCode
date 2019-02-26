// 最长公共子序列 （Longest Common Sequence）
// 给出两个字符串S1，S2，求这两个字符串的最长公共子序列的长度
// ABCD AEBD == 最长公共子序列为 ABD  3

function LongestCommonSequence(s1, s2) {
    let m = s1.length - 1;
    let n = s2.length - 1;
    if (m < 0 || n < 0) return 0;


    let nums = new Array(m);
    for (let i = 0; i <= m; i++) {
        nums[i] = [];
        for (let j = 0; j <= n; j++) {
            nums[i][j] = 0;
        }
    }

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (s1[i] == s2[j]) {
                if (i - 1 >= 0 && j - 1 >= 0) {
                    nums[i][j] = 1 + nums[i - 1][j - 1];
                } else {
                    nums[i][j] = 1;
                }
            } else {
                let len1 = i - 1 >= 0 ? nums[i - 1][j] : 0;
                let len2 = j - 1 >= 0 ? nums[i][j - 1] : 0;
                nums[i][j] = Math.max(len1, len2);
            }
        }
    }
    return nums[m][n];
}

console.log(LongestCommonSequence('ABCD', 'ACBD'))
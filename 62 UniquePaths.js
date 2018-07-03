/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// 回溯 - 超时
var uniquePaths = function(m, n) {
    let path = 0;
    generatePaths(m, n);
    return path;

    function generatePaths(a, b) {
        if (a == 1 && b == 1) {
            path++;
            return;
        }

        if (a > 1) generatePaths(a - 1, b);
        if (b > 1) generatePaths(a, b - 1);
    }
};

// 动态规划
var uniquePaths = function(m, n) {
    let memo = new Array(m + 1);
    for (let i = 0; i <= m; i++) {
        memo[i] = new Array(n + 1);
        for (let j = 0; j <= n; j++) {
            memo[i][j] = 0;
        }
    }

    memo[1][1] = 1;
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (memo[i][j]) continue;
            memo[i][j] = memo[i - 1][j] + memo[i][j - 1];
        }
    }
    return memo[m][n];
};
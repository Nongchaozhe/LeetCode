/**
 * @param {number[][]} grid
 * @return {number}
 */
// 动态规划
var minPathSum = function(grid) {
    let x = grid.length;
    let y = grid[0].length;

    let dp = new Array(x);
    for (let i = 0; i < x; i++)
        dp[i] = new Array(y);

    dp[0][0] = grid[0][0];
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            let value = grid[i][j];
            if (i == 0 && j == 0) continue;
            else if (i == 0 && j > 0) dp[i][j] = value + dp[i][j - 1];
            else if (i > 0 && j == 0) dp[i][j] = value + dp[i - 1][j];
            else if (i > 0 && j > 0) dp[i][j] = value + Math.min(dp[i][j - 1], dp[i - 1][j]);
        }
    }
    return dp[x - 1][y - 1];
};
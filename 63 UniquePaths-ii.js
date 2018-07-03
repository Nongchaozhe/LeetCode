/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
// 动态规划
var uniquePathsWithObstacles = function(obstacleGrid) {
    let x = obstacleGrid.length;
    let y = obstacleGrid[0].length;
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            if (obstacleGrid[i][j] == 0) obstacleGrid[i][j] = -1;
            else obstacleGrid[i][j] = 0;
        }
    }
    if (obstacleGrid[0][0] === 0) return 0;
    obstacleGrid[0][0] = 1;
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            if (obstacleGrid[i][j] !== -1) continue;
            if (i > 0 && j > 0) obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
            else if (i > 0 && j == 0) obstacleGrid[i][j] = obstacleGrid[i - 1][j];
            else if (j > 0 && i == 0) obstacleGrid[i][j] = obstacleGrid[i][j - 1];
        }
    }
    return obstacleGrid[x - 1][y - 1];
};
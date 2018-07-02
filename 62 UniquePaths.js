/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// 记忆搜索 - 超时
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
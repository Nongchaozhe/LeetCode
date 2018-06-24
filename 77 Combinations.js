/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let res = [];
    if (n <= 0 || k <= 0 || k > n) return res;
    getCombination(n, k, 1, []);
    return res;

    // 求解C(n,k)，当前已找到的组合存储在c中，从start开始搜索新的元素
    function getCombination(n, k, start, c) {
        // 深拷贝数组，不然最后c清空，全部清空了
        var a = c.slice(0);
        if (a.length == k) {
            res.push(a);
            return;
        }

        // 还有k-a.length个空位，[i,n]中至少要有k-a.length个元素
        // i最大为n-(k-a.length)+1 ->相对于i<=n的边界，此处为回溯法的剪枝优化
        for (let i = start; i <= (n - (k - a.length) + 1); i++) {
            // for (let i = start; i <= n; i++) {
            a.push(i);
            getCombination(n, k, i + 1, a);
            a.pop();
        }
        return;
    };
};
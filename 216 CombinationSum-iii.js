/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
// 所有相加为n的k个数，1-9
var combinationSum3 = function(k, n) {
    let ret = [];
    generateCombinationSum3(1, 0, []);
    return ret;

    function generateCombinationSum3(start, sum, s) {
        if (s.length == k && sum == n) {
            ret.push([...s]);
            return;
        }

        for (let i = start; i <= 9 && (sum + i) <= n && s.length < k; i++) {
            s.push(i);
            generateCombinationSum3(i + 1, sum + i, s);
            s.pop();
        }
        return;
    }
};
/**
 * @param {number[]} w
 * @param {number[]} v
 * @param {number} C
 * @return {number}
 */
常规回溯

function knapsack01(w, v, C) {
    return bestValue(w, v, w.length - 1, C);
}

/**
 *  用[0,index]的物品，填充容积为c的背包的最大价值
 */
function bestValue(w, v, index, c) {
    if (index < 0 || c <= 0) return 0;

    let res = bestValue(w, v, index - 1, c); //index的物品不放入背包
    if (c >= w[index]) { //C能容纳index物品时
        res = Math.max(res, v[index] + bestValue(w, v, index - 1, c - w[index]));
    }
    return res;
}

//-------  记忆搜索
function knapsack01(w, v, C) {
    let n = w.length;
    let memo = new Array(n);
    for (let i = 0; i < n; i++) {
        memo[i] = new Array();
        for (var j = 0; j < C + 1; j++) {
            memo[i][j] = -1;
        }
    }
    return bestValue(w, v, n - 1, C);


    function bestValue(w, v, index, c) {
        if (index < 0 || c <= 0) return 0;

        if (memo[index][c] !== -1)
            return memo[index][c];

        let res = bestValue(w, v, index - 1, c); //index的物品不放入背包
        if (c >= w[index]) { //C能容纳index物品时
            res = Math.max(res, v[index] + bestValue(w, v, index - 1, c - w[index]));
        }
        memo[index][c] = res;
        return res;
    }
}
// 参考说明：
/**
  buy[i]  表示第i天之前最后一个操作是买，此时的最大收益
  sell[i] 表示第i天之前最后一个操作是卖，此时的最大收益
  rest[i] 表示第i天之前最后一个操作是卖，此时的最大收益
  
  buy[i]  = max(rest[i-1]-price,buy[i-1])
  sell[i] = max(buy[i-1]+price,sell[i-1])
  rest[i] = max(sell[i-1],buy[i-1],rest[i-1])

  由于buy[i]<=rest[i]，即
    rest[i] = max(sell[i-1],rest[i-1])

  因为冷冻期的存在
    rest[i]=sell[i-1];

  状态转移方程可以精简：
    buy[i]  = max(sell[i-2]-price,buy[i-1])
    sell[i] = max(buy[i-1]+price,sell[i-1])
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length < 2) return 0;
    let buy = new Array(prices.length + 1);
    let sell = new Array(prices.length + 1);
    buy[0] = 0, sell[0] = 0;
    buy[1] = -prices[0], sell[1] = 0;
    for (let i = 2; i <= prices.length; i++) {
        buy[i] = Math.max(sell[i - 2] - prices[i - 1], buy[i - 1]);
        sell[i] = Math.max(buy[i - 1] + prices[i - 1], sell[i - 1]);
    }
    return sell[prices.length];
};

// https://leetcode-cn.com/submissions/detail/4025450/
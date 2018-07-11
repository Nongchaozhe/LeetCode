/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 递归，超时
var canPartition0 = function(nums) {
    let sum = 0;
    nums.forEach(item => {
        sum += item;
    });
    if (sum % 2 !== 0) return false;
    return generationPartition(nums, nums.length - 1, sum / 2);

    function generationPartition(nums, index, sum) {
        if (sum === 0) return true;
        if (index < 0 || sum < 0) return false;
        return generationPartition(nums, index - 1, sum) || generationPartition(nums, index - 1, sum - nums[index]);
    }
};

// 记忆化搜索 328ms
var canPartition1 = function(nums) {
    let sum = 0;
    nums.forEach(item => {
        sum += item;
    });
    if (sum % 2 !== 0) return false;

    // memo[i][j] 为-1未计算过，0计算过不能填充，1计算过可以填充
    let memo = new Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
        memo[i] = [];
        for (let j = 0; j <= sum / 2; j++) {
            memo[i][j] = -1;
        }
    }

    return generationPartition(nums, nums.length - 1, sum / 2);

    function generationPartition(nums, index, sum) {
        if (sum === 0) return true;
        if (index < 0 || sum < 0) return false;
        if (memo[index][sum] !== -1) return memo[index][sum] === 1;
        memo[index][sum] = generationPartition(nums, index - 1, sum) || generationPartition(nums, index - 1, sum - nums[index]);
        return memo[index][sum];
    }
};

// 动态规划
var canPartition = function(nums) {
    let sum = 0;
    nums.forEach(item => {
        sum += item;
    });
    if (sum % 2 !== 0) return false;

    // memo[i][j] 为-1未计算过，0计算过不能填充，1计算过可以填充
    let memo = new Array(sum / 2 + 1);
    // id为0的物品，能否填满容量为id的背包
    for (let i = 0; i <= sum / 2; i++) {
        memo[i] = (nums[0] === i);
    }

    for (let i = 1; i < nums.length; i++) {
        for (let j = sum / 2; j >= nums[i]; j--) {
            // 第i个物品不放入 || 第一个物品放入
            memo[j] = memo[j] || memo[j - nums[i]];
        }
    }

    return memo[sum / 2];
};
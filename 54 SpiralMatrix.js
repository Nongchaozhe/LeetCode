/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let ret = [];
    if (matrix.length <= 0) return ret;
    let xBegin = 0,
        xEnd = matrix.length - 1,
        yBegin = 0,
        yEnd = matrix[0].length - 1;
    while (xBegin <= xEnd && yBegin <= yEnd) {
        for (let i = yBegin; i <= yEnd; i++) {
            ret.push(matrix[xBegin][i]);
        }
        if (++xBegin > xEnd) break;

        for (let j = xBegin; j <= xEnd; j++) {
            ret.push(matrix[j][yEnd]);
        }
        if (--yEnd < yBegin) break;


        for (let j = yEnd; j >= yBegin; j--) {
            ret.push(matrix[xEnd][j]);
        }
        if (--xEnd < xBegin) break;

        for (let j = xEnd; j >= xBegin; j--) {
            ret.push(matrix[j][yBegin]);
        }
        if (++yBegin > yEnd) break;

    }
    return ret;
};

var ret = spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]);
console.log(ret);

/*
首先设定上下左右边界
其次向右移动到最右，此时第一行因为已经使用过了，可以将其从图中删去，体现在代码中就是重新定义上边界
判断若重新定义后，上下边界交错，表明螺旋矩阵遍历结束，跳出循环，返回答案
若上下边界不交错，则遍历还未结束，接着向下向左向上移动，操作过程与第一，二步同理
不断循环以上步骤，直到某两条边界交错，跳出循环，返回答案
*/
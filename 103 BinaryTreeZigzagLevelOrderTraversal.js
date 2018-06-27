/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    let ret = [];
    let queue = [];
    if (root === null) return ret;
    queue.push(new NodeLevel(root, 0));
    while (queue.length) {
        let nodeL = queue.shift();
        let level = nodeL.level;
        if (level == ret.length) ret.push([]);
        ret[level].push(nodeL.node.val);
        if (nodeL.node.left !== null) queue.push(new NodeLevel(nodeL.node.left, level + 1));
        if (nodeL.node.right !== null) queue.push(new NodeLevel(nodeL.node.right, level + 1));
    }

    for (let i = 0; i < ret.length; i++) {
        if (i % 2 === 1) {
            ret[i].reverse();
        }
    }
    return ret;
};

function NodeLevel(node, level) {
    this.node = node;
    this.level = level;
}


// https://leetcode-cn.com/submissions/detail/3577971/
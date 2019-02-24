/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层次遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/description/
 *
 * algorithms
 * Medium (53.14%)
 * Total Accepted:    16.4K
 * Total Submissions: 30.9K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。
 * 
 * 例如:
 * 给定二叉树: [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 返回其层次遍历结果：
 * 
 * [
 * ⁠ [3],
 * ⁠ [9,20],
 * ⁠ [15,7]
 * ]
 * 
 * 
 */
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
var levelOrder = function(root) {
    let ret = [];
    if (root == null) return [];

    let queue = [];
    queue.push(new Command(root, 0));
    while (queue.length > 0) {
        let cmd = queue.shift();
        if (cmd.level >= ret.length) {
            ret.push([]);
        }

        ret[cmd.level].push(cmd.node.val);
        if (cmd.node.left) queue.push(new Command(cmd.node.left, cmd.level + 1));
        if (cmd.node.right) queue.push(new Command(cmd.node.right, cmd.level + 1));
    }
    return ret;
};

function Command(node, level) {
    this.node = node;
    this.level = level;
}
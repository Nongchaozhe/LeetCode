/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
 *
 * https://leetcode-cn.com/problems/binary-tree-paths/description/
 *
 * algorithms
 * Easy (56.79%)
 * Total Accepted:    5.7K
 * Total Submissions: 10.1K
 * Testcase Example:  '[1,2,3,null,5]'
 *
 * 给定一个二叉树，返回所有从根节点到叶子节点的路径。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例:
 * 
 * 输入:
 * 
 * ⁠  1
 * ⁠/   \
 * 2     3
 * ⁠\
 * ⁠ 5
 * 
 * 输出: ["1->2->5", "1->3"]
 * 
 * 解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let ret = [];
    if (root == null) return ret;
    if (root.left == null && root.right == null) {
        ret.push(root.val + '');
        return ret;
    }

    let LRet = binaryTreePaths(root.left);
    LRet.forEach(element => {
        ret.push(root.val + '->' + element);
    });

    let RRet = binaryTreePaths(root.right);
    RRet.forEach(element => {
        ret.push(root.val + '->' + element);
    });

    return ret;
};
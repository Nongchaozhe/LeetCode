/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    if (root === null) return 0;
    let ret = 0;
    if (root.left !== null && !root.left.left && !root.left.right) ret += root.left.val;
    return ret + sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
};

// https://leetcode-cn.com/submissions/detail/3577355/
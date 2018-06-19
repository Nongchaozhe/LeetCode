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
var maxDepth = function(root) {
    if (root == null) return 0;
    let leftDeep = maxDepth(root.left);
    let rightDeep = maxDepth(root.right);
    return 1 + Math.max(leftDeep, rightDeep);
};
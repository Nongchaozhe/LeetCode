/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (root == null) return true;
    if (Math.abs(treeLength(root.left) - treeLength(root.right)) > 1) return false;
    return isBalanced(root.left) && isBalanced(root.right);
};

function treeLength(root) {
    if (root == null) return 0;
    let leftLen = treeLength(root.left);
    let rightLen = treeLength(root.right);
    return (leftLen > rightLen ? leftLen : rightLen) + 1;
}
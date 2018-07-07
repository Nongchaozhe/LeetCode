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
var isSymmetric = function(root) {
    return mirrorTree(root, root);
};

function mirrorTree(l, r) {
    if (l == null && r == null) return true;
    if (l == null || r == null) return false;
    return l.val === r.val && mirrorTree(l.right, r.left) && mirrorTree(l.left, r.right);
}
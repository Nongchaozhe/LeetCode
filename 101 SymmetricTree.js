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
    if (root === null) return true;
    root.left = invertTree(root.left);
    return sameTree(root.left, root.right);
};

function sameTree(p, q) {
    if (p === null && q === null) return true;
    if (p === null || q === null) return false;
    if (p.val === q.val) {
        return sameTree(p.left, q.left) && sameTree(p.right, q.right);
    }
    return false;
}

function invertTree(root) {
    if (root === null) return null;
    let left = invertTree(root.left);
    let right = invertTree(root.right);
    root.left = right;
    root.right = left;
    return root;
}
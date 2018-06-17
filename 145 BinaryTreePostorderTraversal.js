/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 遍历解法
var postorderTraversal = function(root) {
    let ret = [];
    if (root != null) {
        let leftArr = postorderTraversal(root.left);
        let rightArr = postorderTraversal(root.right);
        ret = ret.concat(leftArr, rightArr, [root.val]);
    }
    return ret;
};
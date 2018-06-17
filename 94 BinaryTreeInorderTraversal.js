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
// 递归写法
var inorderTraversal = function(root) {
    let ret = [];
    if (root !== null) {
        let leftArr = inorderTraversal(root.left);
        let rightArr = inorderTraversal(root.right);
        ret = ret.concat(leftArr, [root.val], rightArr);
    }
    return ret;
};
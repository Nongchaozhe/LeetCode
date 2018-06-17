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
var preorderTraversal = function(root) {
    let ret = [];
    if (root != null) {
        ret.push(root.val);
        let leftArr = preorderTraversal(root.left);
        let rightArr = preorderTraversal(root.right);
        ret = ret.concat(leftArr, rightArr);
    }
    return ret;
};
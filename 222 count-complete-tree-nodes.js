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
var countNodes = function(root) {
    if (root === null) return 0;
    let num = 0;
    while (root) {
        let l = treeDepth(root.left);
        let r = treeDepth(root.right);

        if (l === r) {
            // 相等，左子树满了，树的节点数为2^h-1，在加上root节点，及2^h
            num += Math.pow(2, l);
            root = root.right;
        } else {
            // 不等，右子树满了
            num += Math.pow(2, r);
            root = root.left;
        }
    }
    return num;

    function treeDepth(root) {
        if (root === null) return 0;
        let ret = 0;
        while (root) {
            ret++;
            root = root.left;
        }
        return ret;
    }

    // 递归解法相对耗时。需要利用好完全二叉树性质
    // if (root === null) return 0;
    // let ret = 1;
    // ret += countNodes(root.left);
    // ret += countNodes(root.right);
    // return ret;
};
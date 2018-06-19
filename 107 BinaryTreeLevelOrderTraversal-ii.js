/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    let ret = [];
    let stack = [];
    if (root == null) return ret;
    stack.push(new NodeLevel(root, 0));
    while (stack.length) {
        let nl = stack.shift();
        let level = nl.level;
        if (level == ret.length) ret.push([]);
        ret[level].push(nl.node.val);
        if (nl.node.left != null) stack.push(new NodeLevel(nl.node.left, level + 1))
        if (nl.node.right != null) stack.push(new NodeLevel(nl.node.right, level + 1))
    }
    return ret.reverse();
};

function NodeLevel(node, level) {
    this.node = node;
    this.level = level;
}
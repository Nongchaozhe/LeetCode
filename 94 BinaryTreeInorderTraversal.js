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

// 迭代写法
var inorderTraversal = function(root) {
    let ret = [];
    let stack = [];
    if (root == null) return ret;
    stack.push(new Command('go', root));
    while (stack.length && stack[stack.length - 1]) {
        let cmd = stack.pop();
        if (cmd.name == 'print') {
            ret.push(cmd.node.val);
        } else if (cmd.name == 'go') {
            if (cmd.node.right != null) stack.push(new Command('go', cmd.node.right));
            stack.push(new Command('print', cmd.node))
            if (cmd.node.left != null) stack.push(new Command('go', cmd.node.left));
        }
    }
    return ret;
}

function Command(name, node) {
    this.name = name;
    this.node = node
}
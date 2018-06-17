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

// 迭代解法
var postorderTraversal = function(root) {
    let ret = [];
    let stack = [];
    if (root == null) return ret;
    stack.push(new Command('go', root));
    while (stack.length && stack[stack.length - 1]) {
        let cmd = stack.pop();
        if (cmd.name == 'print') {
            ret.push(cmd.node.val);
        } else if (cmd.name == 'go') {
            stack.push(new Command('print', cmd.node));
            if (cmd.node.right != null) stack.push(new Command('go', cmd.node.right));
            if (cmd.node.left != null) stack.push(new Command('go', cmd.node.left));
        }
    }
    return ret;
}

function Command(name, node) {
    this.name = name;
    this.node = node;
}
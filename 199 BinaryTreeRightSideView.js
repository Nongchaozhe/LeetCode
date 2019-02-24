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
var rightSideView = function(root) {
    let levelOrder = [];
    if (root == null) return [];

    let queue = [];
    queue.push(new Command(root, 0));
    while (queue.length > 0) {
        let cmd = queue.shift();
        if (cmd.level >= levelOrder.length) {
            levelOrder.push([]);
        }

        levelOrder[cmd.level].push(cmd.node.val);

        if (cmd.node.left != null) queue.push(new Command(cmd.node.left, cmd.level + 1));
        if (cmd.node.right != null) queue.push(new Command(cmd.node.right, cmd.level + 1));
    }

    let ret = [];
    levelOrder.forEach(element => {
        ret.push(element.pop());
    });

    return ret;
};

function Command(node, level) {
    this.node = node;
    this.level = level;
}
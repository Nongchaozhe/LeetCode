/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    for (let i = 0; i < tokens.length; i++) {
        let nums1 = 0,
            nums2 = 0,
            nums = 0;
        switch (tokens[i]) {
            case '+':
                nums = stack.pop() + stack.pop();
                stack.push(nums);
                break;
            case '-':
                nums1 = stack.pop();
                nums2 = stack.pop();
                nums = nums2 - nums1;
                stack.push(nums);
                break;
            case '*':
                nums = stack.pop() * stack.pop();
                stack.push(nums);
                break;
            case '/':
                nums1 = stack.pop();
                nums2 = stack.pop();
                nums = parseInt(nums2 / nums1);
                stack.push(nums);
                break;
            default:
                stack.push(parseInt(tokens[i]));
                break;
        }
    }
    return stack[0];
};
// https://leetcode-cn.com/submissions/detail/3578326/
// https://blog.csdn.net/ValDC_Morning/article/details/77151550 
// 逆波兰表达式说明：栈的应用 - 遇到操作数入栈，遇到操作符出栈，运算结果入栈。
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // 时间复杂度O(n)，空间复杂度O(1)
    // let pre = null;
    // let cur = head;
    // let next = null;
    // while (cur) {
    //     next = cur.next
    //     cur.next = pre;
    //     pre = cur;
    //     cur = next;
    // }
    // return pre;

    // 递归
    if (head == null || head.next == null) {
        return head;
    }
    let nextNode = head.next;
    let newNode = reverseList(nextNode);
    nextNode.next = head;
    head.next = null;
    return newNode;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}
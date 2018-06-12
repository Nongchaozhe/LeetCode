/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let start = new ListNode(-1);
    start.next = head;
    let pre = start;
    let cur = head;
    while (cur) {
        if (cur.val == val) {
            // pre不动，cur移动
            pre.next = cur.next;
            cur = cur.next;
        } else {
            // pre，cur后移
            pre = cur;
            cur = cur.next;
        }
    }
    return start.next;
};
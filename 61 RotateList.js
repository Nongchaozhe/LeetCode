/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (head == null || k == 0) {
        return head;
    }
    let start = new ListNode(-1);
    start.next = head;

    let cur = start;
    let len = -1;
    while (cur) {
        cur = cur.next
        len++;
    }
    if (k % len == 0) {
        return head;
    }
    k = (k <= len) ? k : (k % len);

    cur = start;
    let move = start.next;
    let index = 0;
    while (move.next) {
        if (index < k - 1) {
            move = move.next;
        } else {
            move = move.next;
            cur = cur.next;
        }
        index++;
    }
    move.next = start.next;
    start.next = cur.next;
    cur.next = null;
    return start.next;
};
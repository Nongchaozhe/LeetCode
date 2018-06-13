/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let start = new ListNode(-1);
    start.next = head;

    let cur = start;
    let move = start.next;
    let index = 0;
    while (move) {
        if (index < n) {
            move = move.next;
        } else {
            move = move.next;
            cur = cur.next;
        }
        index++;
    }
    cur.next = cur.next.next;
    return start.next;
};
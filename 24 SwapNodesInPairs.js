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
var swapPairs = function(head) {
    let start = new ListNode(-1);
    start.next = head;
    let pre = start;
    let odd = head;
    let even = null;
    while (odd && odd.next) {
        even = odd.next;

        pre.next = even;
        odd.next = even.next;
        even.next = odd;

        pre = odd;
        odd = pre.next;
    }
    return start.next;
};
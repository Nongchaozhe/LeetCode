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
var deleteDuplicates = function(head) {
    if (head == null) return head;
    let start = new ListNode(head.val - 1);
    start.next = head;
    let pre = start;
    let mid = head;
    let cur = head.next;
    while (mid && cur) {
        cur = mid.next;
        while (cur && cur.val == mid.val) {
            cur = cur.next;
        }
        if (mid.next == cur) {
            // console.log('连续')
            pre = mid;
            mid = cur;
            cur = cur.next;
        } else {
            // console.log('不连续')
            pre.next = cur;
            mid = cur;
            cur = cur ? cur.next : null;
        }
    }
    return start.next;
};
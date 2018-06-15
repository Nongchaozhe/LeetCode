/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // O(n)时间复杂度
    // O(1)空间复杂度
    let cur = head;
    let len = 0;
    // 长度
    while (cur) {
        len++;
        cur = cur.next;
    }

    cur = head;
    let mid = parseInt(len / 2);
    let pre = null;
    next = null;
    // 前半部分reverse
    while (mid--) {
        next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }

    if (len % 2 == 1) {
        cur = cur.next;
    }

    // 比较
    while (pre && cur) {
        if (pre.val == cur.val) {
            pre = pre.next;
            cur = cur.next;
        } else {
            return false;
        }
    }
    return true;
};
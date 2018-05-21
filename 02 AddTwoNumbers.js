/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}
var addTwoNumbers = function(l1, l2) {
    let ret = new ListNode(1);
    let carry = 0;
    let temp = ret;
    while (l1 !== null || l2 !== null) {
        let num1 = l1 == null ? 0 : l1.val;
        let num2 = l2 == null ? 0 : l2.val;
        let sum = num1 + num2 + carry;
        // console.log(sum);
        carry = sum >= 10 ? 1 : 0;
        temp.next = new ListNode(sum % 10);
        temp = temp.next;

        l1 = l1 ? l1.next : l1;
        l2 = l2 ? l2.next : l2;
    }
    if (carry == 1) {
        temp.next = new ListNode(1);
    }
    return ret.next;
};

// var a1 = new ListNode(2);
// var a2 = new ListNode(4);
// var a3 = new ListNode(3);
// a1.next = a2;
// a2.next = a3;

// var b1 = new ListNode(5);
// var b2 = new ListNode(6);
// var b3 = new ListNode(4);
// b1.next = b2;
// b2.next = b3;

// var s = addTwoNumbers(a1, b1);
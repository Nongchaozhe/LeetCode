/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if (head == null || head.next == null) return head;
    let tmp = [],
        ans = [];
    while (head) {
        tmp.push(new ListNode(head.val));
        head = head.next;
    }

    tmp.forEach((ele) => {
        if (ele.val < x) {
            ans.push(ele);
        }
    });

    tmp.forEach((ele) => {
        if (ele.val >= x) {
            ans.push(ele);
        }
    });

    for (let index = 0; index < ans.length - 1; index++) {
        ans[index].next = ans[index + 1];
    }

    return ans[0];

};

//推荐
var partition = function(head, x) {
    let less = new ListNode(-1);
    let more = new ListNode(-1);
    lessHead = less;
    moreHead = more;
    while (head) {
        if (head.val < x) {
            less.next = head;
            less = less.next;
        } else {
            more.next = head;
            more = more.next;
        }
        head = head.next;
    }
    more.next = null;
    less.next = moreHead.next;
    return lessHead.next;
};
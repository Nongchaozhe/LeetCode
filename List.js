function ListNode(val) {
    this.val = val;
    this.next = null;
}

function createLinedList(arr) {
    if (arr.length == 0) return null;
    let head = new ListNode(arr[0]);
    let curNode = head;
    for (let i = 1; i < arr.length; i++) {
        curNode.next = new ListNode(arr[i]);
        curNode = curNode.next;
    }
    return head;
}

function printLinkedList(head) {
    let curNode = head;
    let out = "";
    while (curNode != null) {
        out += curNode.val + '->';
        curNode = curNode.next;
    }
    console.log(out + null);
    return;
}

// 有待讨论
function deleteLinkedNode(head) {
    let curNode = head;
    while (curNode != null) {
        let delNode = curNode;
        curNode = curNode.next;
        delete delNode;
    }
    return;
}


let head = createLinedList([1, 2, 3, 4, 5]);
console.log(head, head.next, head.next.next);
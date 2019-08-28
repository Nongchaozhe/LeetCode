// 链表元素，用于桶内的元素排序
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// nums待排数组，内有浮点数，均匀分布在[0,10]的范围
// len：桶的个数
function bucketSort(nums, len) {
    console.log(nums, len);
    if (nums.length <= 1) return;

    let bucket = [];
    for (let i = 0; i < len; i++) {
        bucket[i] = new ListNode(0);
    }

    // 桶内链表排序
    for (const num of nums) {
        // 获取应该插入到哪个桶内
        let idx = getBucketIndex(num);
        let insertNode = new ListNode(num);
        if (bucket[idx].next == null) {
            // 无元素，插入元素
            bucket[idx].next = insertNode;
        } else {
            // 有元素，插入到合适的位置
            let pre = bucket[idx];
            let cur = pre.next;
            while (cur != null && cur.val <= num) {
                pre = cur;
                cur = cur.next;
            }

            insertNode.next = cur;
            pre.next = insertNode;
        }
    }

    // 桶内元素输出
    let index = 0;
    for (let i = 0; i < len; i++) {
        let node = bucket[i].next;
        if (node == null) continue;
        while (node != null) {
            nums[index] = node.val;
            index++;
            node = node.next;
        }
    }
}


// 计算放入哪个桶中
// 当前例子是，浮点数转化为整数，作为桶的索引值，实际开发要根据场景具体设计
function getBucketIndex(num) {
    return parseInt(num);
}

let array = [2.18, 0.18, 0.16, 2.12, 3.66, 7.88, 7.99, 8.12, 9.66, 5.1, 4.12, 5.28];
bucketSort(array, 11);
console.log(array);
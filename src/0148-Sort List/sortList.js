/**
 * 题述：排序链表
 * 思路：非递归归并排序，归并得核心思想是分治
 * 时间复杂度：nlog₂n
 * 空间复杂度：0
 * @param {ListNode} head
 * @return {ListNode}
 */
function sortList(head) {
    if (head == null || head.next == null) return head;
    // 获取链表长度
    let current = head;
    let len = 0;
    while (current != null) {
        len++;
        current = current.next;
    }

    const dummy = { val: null, next: head };
    let tail = dummy;

    // 自底向上归并
    for (let distance = 1; distance < len; distance *= 2) {
        current = dummy.next;
        tail = dummy;

        while (current != null) {
            const list1 = current;
            const list2Head = cut(current, distance);
            current = cut(list2Head, distance);
            // 将合并后的链表接到尾部
            // 最开始循环的时候 tail 指向哑节点，所以哑节点始终指向合并后的链表的首部
            tail.next = merge(list1, list2Head);
            while (tail.next != null) {
                tail = tail.next;
            }
        }
    }

    return dummy.next;
}

/**
 * 断开链表
 * @param {ListNode} list1 链表
 * @param {number} len 被断开得链表的长度
 * @returns {ListNode} 剩余部分链表头节点
 */
function cut(list1, len) {
    let current = list1;
    while (current && --len > 0) {
        current = current.next;
    }

    if (current == null) {
        return null;
    }

    const { next } = current;
    current.next = null;
    return next;
}

/**
 * 合并两个链表
 * @param {ListNode} list1
 * @param {ListNode} list2
 */
function merge(list1, list2) {
    if (list1 == null) return list2;
    if (list2 == null) return list1;

    const dummy = { val: null, next: null };
    let tail = dummy;
    let i = list1;
    let j = list2;
    while (i != null && j !== null) {
        // 注意这里必须是小于等于才能保证排序的稳定性
        if (i.val <= j.val) {
            tail.next = i;
            tail = i;
            i = i.next;
        } else {
            tail.next = j;
            tail = j;
            j = j.next;
        }
    }
    // 剩下部分直接拼起来就行了
    tail.next = i == null ? j : i;

    return dummy.next;
}

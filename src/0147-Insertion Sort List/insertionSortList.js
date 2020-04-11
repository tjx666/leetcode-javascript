/**
 * 对链表使用插入排序
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
function insertionSortList(head) {
    if (head == null || head.next == null) return head;

    const sentinel = { val: null, next: head };
    let previous = head;
    let i = head.next;
    while (i != null) {
        const { next } = i;
        let p = sentinel;
        let j = sentinel.next;
        while (j !== i && j.val <= i.val) {
            p = j;
            j = j.next;
        }

        if (j !== i) {
            // 从原位置删除
            previous.next = i.next;

            p.next = i;
            i.next = j;
        }

        if (previous.next === i) {
            previous = i;
        }

        i = next;
    }

    return sentinel.next;
}

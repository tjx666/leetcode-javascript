/**
 * 题述：反转第 m 到 n 个节点之间的节点，要求时间复杂度 m - n, 常数级空间复杂度
 *
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
function reverseBetween(head, m, n) {
    if (head == null || head.next == null) {
        return head;
    }

    const sentinel = { val: null, next: head };
    let previous = sentinel;
    let current = head;
    let index = 1;
    let previousM;
    while (index <= n && current != null) {
        if (index === m) {
            previousM = previous;
        }

        const { next } = current;
        if (index > m && index <= n) {
            current.next = previous;
        }

        index++;
        previous = current;
        current = next;
    }

    previousM.next.next = current;
    previousM.next = previous;

    return sentinel.next;
}

const testList = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null,
                },
            },
        },
    },
};

reverseBetween(testList, 2, 4);

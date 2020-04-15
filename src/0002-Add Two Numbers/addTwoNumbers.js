/**
 * 链表相加返回新的链表
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * @example
 *
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 *
 */
function addTwoNumbers(l1, l2) {
    let current1 = l1;
    let current2 = l2;
    const sentinel = { val: null, next: null };
    let tail = sentinel;
    let carry = 0;

    while (current1 != null || current2 != null) {
        const x = current1 == null ? 0 : current1.val;
        const y = current2 == null ? 0 : current2.val;
        const temp = x + y + carry;
        carry = temp >= 10 ? 1 : 0;
        const newNode = {
            val: temp % 10,
            next: null,
        };
        tail.next = newNode;
        tail = tail.next;
        if (current1 != null) current1 = current1.next;
        if (current2 != null) current2 = current2.next;
    }

    if (carry) {
        tail.next = {
            val: 1,
            next: null,
        };
    }

    return sentinel.next;
}

module.exports = addTwoNumbers;

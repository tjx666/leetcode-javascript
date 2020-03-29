/**
 * 将二级制数链表转换成整数
 *
 * @param {ListNode} head
 * @return {number}
 */
function getDecimalValue(head) {
    if (head == null) return 0;

    let sum = 0;
    let current = head;
    while (current != null) {
        sum = sum === 0 ? current.val : sum * 2 + current.val;
        current = current.next;
    }

    return sum;
}

module.exports = getDecimalValue;

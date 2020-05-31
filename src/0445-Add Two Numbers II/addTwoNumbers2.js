/**
 * 题述：链表相加二
 * 思路：题目要求不能修改原数组的话，可以有两种思路，
 * 一种是先反转 l1, l2 后求得链表相加的新链表 l3 后，再反转 l1, l2 为原链表
 * 另一种那就使用额外的数据结构存储链表元素值
 * 因为我们处理相加是从低位开始处理，而遍历的时候是先遍历高位节点，也就是后进先出，
 * 所以使用栈来存储，并且注意在构造 l3 的时候应该使用头插法来获得反转后的链表
 * 时间复杂度：max(m, n), m, n 分别为 l1 和 l2 的节点数量
 * 空间复杂度：max(m, n)
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
    const stack1 = [];
    let current1 = l1;
    while (current1 != null) {
        stack1.push(current1.val);
        current1 = current1.next;
    }

    const stack2 = [];
    let current2 = l2;
    while (current2 != null) {
        stack2.push(current2.val);
        current2 = current2.next;
    }

    let carryBit = 0;
    const dummy = { val: null, next: null };
    while (stack1.length !== 0 || stack2.length !== 0 || carryBit === 1) {
        const sum = ~~stack1.pop() + ~~stack2.pop() + carryBit;
        carryBit = sum >= 10 ? 1 : 0;
        const newNode = { val: sum % 10, next: null };
        newNode.next = dummy.next;
        dummy.next = newNode;
    }

    return dummy.next;
}

module.exports = addTwoNumbers;

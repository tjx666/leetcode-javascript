/**
 * 链表相加二
 *
 * 双栈法，还可以使用递归，不过不太好理解，就不写了
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
    const stack1 = [];
    const stack2 = [];
    let current1 = l1;
    let current2 = l2;
    let head = null;
    let carry = 0;

    while (current1 != null) {
        stack1.push(current1.val);
        current1 = current1.next;
    }

    while (current2 != null) {
        stack2.push(current2.val);
        current2 = current2.next;
    }

    while (stack1.length !== 0 || stack2.length !== 0) {
        const x = ~~stack1.pop();
        const y = ~~stack2.pop();
        const temp = x + y + carry;
        carry = temp >= 10 ? 1 : 0;

        const newNode = {
            val: temp % 10,
            next: null,
        };
        if (head === null) {
            head = newNode;
        } else {
            newNode.next = head;
            head = newNode;
        }
    }

    if (carry) {
        head = {
            val: 1,
            next: head,
        };
    }

    return head;
}

module.exports = addTwoNumbers;

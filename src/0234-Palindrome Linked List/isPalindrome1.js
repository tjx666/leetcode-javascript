/**
 * 题述：判断是否为回文链表
 * 思路：递归解法 利用递归可以反向遍历链表的特点，让反向节点和正向节点进行对比
 * 时间复杂度：n，n 为节点的数量，递归的深度
 * 空间复杂度：n，递归需要栈空间
 * @param {ListNode} head
 * @return {boolean}
 * @example
 *
 * Input: 1->2
 * Output: false
 *
 * Input: 1->2->2->1
 * Output: true
 *
 */
function isPalindrome(head) {
    let frontCurrent = head;
    function recursiveCheck(current) {
        if (current == null) return true;
        if (!recursiveCheck(current.next)) return false;
        if (frontCurrent.val !== current.val) return false;
        frontCurrent = frontCurrent.next;
        return true;
    }
    return recursiveCheck(head);
}

module.exports = isPalindrome;

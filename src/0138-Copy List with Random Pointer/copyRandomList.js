/**
 * 链接：https://leetcode-cn.com/problems/copy-list-with-random-pointer/
 * 题述：复制带随机指针的链表
 * 思路：就当深拷贝来解就好了，只不过这道题被拷贝的类型只有对象和 null
 * @param {Node} head
 * @return {Node}
 */
function copyRandomList(head) {
    const clonedMap = new WeakMap();

    function deepClone(value) {
        if (clonedMap.has(value)) return clonedMap.get(value);
        if (value === null) return null;

        const clonedNode = { val: value.val };
        clonedMap.set(value, clonedNode);
        clonedNode.random = deepClone(value.random);
        clonedNode.next = deepClone(value.next);

        return clonedNode;
    }

    return deepClone(head);
}

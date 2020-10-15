/* eslint-disable prefer-destructuring */
/**
 * 题述：每一个节点都有 next 属性，填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。
 * 思路：层序遍历
 * 时间复杂度：n，n 为节点个数
 * 空间复杂度：n
 * @param {Node} root
 * @return {Node}
 */
function connect(root) {
    if (root === null) return null;

    const queue = root.left ? [root.left, root.right] : [];

    while (queue.length !== 0) {
        for (let i = 0, len = queue.length; i < len; i++) {
            const front = queue.shift();
            if (i !== len - 1) {
                front.next = queue[0];
            }
            if (front.left) {
                queue.push(front.left, front.right);
            }
        }
    }

    return root;
}

const test = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
        },
        right: {
            val: 5,
        },
    },
    right: {
        val: 3,
        left: {
            val: 6,
        },
        right: {
            val: 7,
        },
    },
};

connect(test);

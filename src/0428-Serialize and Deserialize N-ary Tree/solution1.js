/* eslint-disable class-methods-use-this */
/**
 * 题述：序列号和反序列化 n 叉树
 * 思路：297. 二叉树的序列化与反序列化是使用 BFS 对树进行序列化，这里采用 DFS
 * 时间复杂度： n，树的节点数
 * 空间复杂度：H，树高
 */
class Codec {
    /**
     * Encodes a tree to a single string.
     * @param {Node} root
     * @return {string}
     */
    serialize(root) {
        let str = '';
        function dfs(node) {
            if (node == null) return;
            str += ` ${node.val}`;
            str += ` ${node.children.length}`;
            for (let i = 0, len = node.children.length; i < len; i++) {
                dfs(node.children[i]);
            }
        }
        dfs(root);
        return str.trim();
    }

    /**
     * Decodes your encoded data to tree.
     * @param {string} data
     * @return {Node}
     */
    deserialize(data) {
        if (data.trim() === '') return null;

        const nums = data.split(' ');
        function dfs() {
            const val = nums.shift();
            const len = nums.shift();
            const node = { val, children: [] };
            for (let i = 0; i < len; i++) {
                node.children[i] = dfs();
            }
            return node;
        }

        return dfs();
    }
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.deserialize(codec.serialize(root));

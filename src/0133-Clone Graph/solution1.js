/**
 * 题述：克隆图 https://leetcode-cn.com/problems/clone-graph/
 * 思路：递归 + map 注册
 * @param {Node} n
 * @return {Node}
 */
function cloneGraph(n) {
    const map = new Map();

    function cloneDeep(node) {
        if (node == null) return node;

        if (map.has(node)) {
            return map.get(node);
        }

        const { val, neighbors } = node;
        const clonedNode = { val, neighbors: [] };
        map.set(node, clonedNode);
        for (let i = 0; i < neighbors.length; i++) {
            clonedNode.neighbors.push(cloneDeep(neighbors[i]));
        }
        return clonedNode;
    }

    const result = cloneDeep(n);
    return result;
}

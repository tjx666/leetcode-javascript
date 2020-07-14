/**
 * 题述：
 * 给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。
 * 相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。
 * 思路：最先想到的是使用 DFS 穷举
 * 时间复杂度：n!
 * 空间复杂度：H
 * @param {number[][]} triangle
 * @return {number}
 */
function minimumTotal(triangle) {
    const { length: maxFloor } = triangle;
    if (maxFloor === 0) return 0;
    let min = Infinity;

    /**
     *
     * @param {*} floor 当前层下标
     * @param {*} index 当前层处理的数组中被处理的元素的下标，等于上一层被处理的下标 index 或者 index + 1
     * @param {*} sum 之前层累计和
     */
    function dfs(floor, index, sum) {
        const currentFloorElements = triangle[floor];

        sum += currentFloorElements[index];
        if (floor === maxFloor - 1) {
            min = Math.min(min, sum);
            return;
        }

        const nextFloor = triangle[floor + 1];
        // !: 注意不要用 if (nextFloor[index])
        if (nextFloor[index] !== undefined) {
            dfs(floor + 1, index, sum);
        }

        if (nextFloor[index + 1] !== undefined) {
            dfs(floor + 1, index + 1, sum);
        }
    }
    dfs(0, 0, 0);
    return min;
}

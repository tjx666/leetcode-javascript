/**
 * 题述：统计有序矩阵中负数的个数
 * 思路：从右上角遍历到左下角，查找每一行的第一个负数，下一行的第一个负数下标肯定小于等于上一行第一个负数下标
 * 时间复杂度： 低于 m，不用二分法都是 m，m 表示矩阵宽度
 * 时间复杂度：1
 * @param {number[][]} grid
 * @return {number}
 */
function countNegatives(grid) {
    const row = grid.length;
    if (row === 0) return 0;
    const column = grid[0].length;

    let count = 0;
    let pos = column;
    for (let i = 0; i < row; i++) {
        let left = 0;
        let right = pos;
        while (left <= right) {
            const mid = ((left + right) / 2) | 0;
            if (grid[i][mid] >= 0) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        pos = left;
        count += pos === -1 ? column : column - pos;
    }
    return count;
}

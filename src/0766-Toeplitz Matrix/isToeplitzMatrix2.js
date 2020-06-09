/**
 * 题述：托普利兹矩阵
 * 思路：直接遍历每一个元素，如果计算出来的左上角元素在矩阵内并且和当前元素值不相等就返回 False
 * 时间复杂度：m * n，每一个元素遍历一次
 * 空间复杂度：0
 * @param {number[][]} matrix
 * @return {boolean}
 * @example
 *
 * Input:
 * matrix = [
 *   [1,2,3,4],
 *   [5,1,2,3],
 *   [9,5,1,2]
 * ]
 * Output: True
 *
 * Input:
 * matrix = [
 *   [1,2],
 *   [2,2]
 * ]
 * Output: False
 *
 */
function isToeplitzMatrix(matrix) {
    const row = matrix.length;
    if (row === 0) return true;
    const column = matrix[0].length;

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            const topLeftI = i - 1;
            const topLeftJ = j - 1;
            if (topLeftI >= 0 && topLeftJ >= 0 && matrix[topLeftI][topLeftJ] !== matrix[i][j]) {
                return false;
            }
        }
    }
    return true;
}

/**
 * 题述：托普利兹矩阵
 * 思路：访问每一条左上角到右下角的对角线
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
    if (row <= 1) return true;
    const column = matrix[0].length;
    if (column <= 1) return true;

    for (let col = 0; col < column - 1; col++) {
        let i = 1;
        let j = col + 1;
        while (i < row && j < column) {
            if (matrix[i][j] !== matrix[i - 1][j - 1]) return false;
            i++;
            j++;
        }
    }

    for (let r = 1; r < row - 1; r++) {
        let i = r + 1;
        let j = 1;
        while (i < row && j < column) {
            if (matrix[i][j] !== matrix[i - 1][j - 1]) return false;
            i++;
            j++;
        }
    }

    return true;
}

/**
 * 题述：螺旋矩阵
 * 思路：一圈一圈的遍历
 * 时间复杂度：m * n
 * 空间复杂度：1
 * @param {number[][]} matrix
 * @return {number[]}
 */
function spiralOrder(matrix) {
    const rowCount = matrix.length;
    if (rowCount === 0) return [];
    const colCount = matrix[0].length;
    if (colCount === 0) return [];

    const totalCount = rowCount * colCount;
    const result = new Array(totalCount);
    let index = 0;
    let left = 0;
    let right = colCount - 1;
    let top = 0;
    let bottom = rowCount - 1;
    while (left <= right && top <= bottom) {
        for (let j = left; j <= right; j++) {
            result[index++] = matrix[top][j];
        }
        for (let i = top + 1; i <= bottom; i++) {
            result[index++] = matrix[i][right];
        }
        if (left !== right && top !== bottom) {
            for (let j = right - 1; j >= left; j--) {
                result[index++] = matrix[bottom][j];
            }
            for (let i = bottom - 1; i > top; i--) {
                result[index++] = matrix[i][left];
            }
        }
        left++;
        right--;
        top++;
        bottom--;
    }

    return result;
}

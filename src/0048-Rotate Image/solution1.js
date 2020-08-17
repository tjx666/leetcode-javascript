/**
 * 题述：旋转 n x n 矩阵
 * 思路一：
 * 对角转置再 x 轴取反，假设原坐标为 (i, j) 易得旋转后的矩阵坐标是 (j, n - i - 1)
 * 对角线转置后的坐标是 (j , i)， i 和 n - i - 1 是 x 轴反转的效果
 * 时间复杂度：n²
 * 空间复杂度：0
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix) {
    const n = matrix.length;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    const halfLen = n / 2 || 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < halfLen; j++) {
            [matrix[i][j], matrix[i][n - 1 - j]] = [matrix[i][n - 1 - j], matrix[i][j]];
        }
    }
}

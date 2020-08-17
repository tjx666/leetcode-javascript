/**
 * 题述：旋转 n x n 矩阵
 * 思路一：每一个元素的旋转其实是对应四个元素的旋转，矩阵的旋转你可以看作是一个一个圈在旋转
 * 示意图：https://pic.leetcode-cn.com/12605efb60d2efc64e6ecfcf6562a98a49acb3ce696b0c1ad3da46ab8977fa16-48_angles.png
 * 任意一个元素 (i, j) 对应四个元素：(i, j), , (n - 1 -i, n - 1 - j), (n - 1 -j, i)
 * 时间复杂度：n²
 * 空间复杂度：0
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 *
 */
function rotate(matrix) {
    const n = matrix.length;
    const halfLen = (n / 2) | 0;
    for (let i = 0; i < halfLen; i++) {
        for (let j = i; j < n - 1 - i; j++) {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[n - 1 - j][i];
            matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j];
            matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i];
            matrix[j][n - 1 - i] = temp;
        }
    }
}

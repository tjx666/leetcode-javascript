/**
 * 题述：
 * 查找矩阵中的幸运数，幸运数是指矩阵中满足同时下列两个条件的元素：
 * 在同一行的所有元素中最小
 * 在同一列的所有元素中最大
 * 思路：使用辅助数组 rMin 保存每行最小数，cMax 保存每列最大数
 * 时间复杂度：m * n
 * 空间复杂度：m + n
 * @param {number[][]} matrix
 * @return {number[]}
 */
function luckyNumbers(matrix) {
    const row = matrix.length;
    if (row === 0) return [];
    const column = matrix[0].length;
    if (column === 0) return [];

    const rMin = new Array(row).fill(Infinity);
    const cMax = new Array(column).fill(-Infinity);
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            rMin[i] = Math.min(rMin[i], matrix[i][j]);
            cMax[j] = Math.max(cMax[j], matrix[i][j]);
        }
    }

    const result = [];
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            const value = matrix[i][j];
            if (value === rMin[i] && value === cMax[j]) {
                result.push(value);
            }
        }
    }
    return result;
}

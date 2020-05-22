/**
 * 题述：转置矩阵
 * 思路：先确定外层数组和数组的长度，再找到新数组每个坐标对应之前的数组的下标，其实就是 x, y 反转
 * 时间复杂度：r * c, r 为行数， c 为列数
 * 空间复杂度：r * c
 * @param {number[][]} A
 * @return {number[][]}
 * @example
 * 1 2 3
 * 4 5 6
 *
 * 1 4
 * 2 5
 * 3 6
 */
function transpose(A) {
    if (A.length === 0) return [];
    const xLength = A[0].length;
    const yLength = A.length;
    const result = [];
    for (let i = 0; i < xLength; i++) {
        for (let j = 0; j < yLength; j++) {
            if (result[i] === undefined) {
                result[i] = [];
            }
            result[i][j] = A[j][i];
        }
    }
    return result;
}

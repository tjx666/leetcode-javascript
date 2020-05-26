/**
 * 题述：矩阵置零，要求空间复杂度为 0
 * 思路：可以遍历两次，一次做标记，一次置零
 * 时间复杂度：m * n
 * 空间复杂度：1
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix) {
    const row = matrix.length;
    const col = matrix[0].length;

    let firstColZero = false;
    // 遍历每一个节点
    for (let i = 0; i < row; i++) {
        if (matrix[i][0] === 0) {
            firstColZero = true;
        }

        for (let j = 1; j < col; j++) {
            if (matrix[i][j] === 0) {
                // 将第 i 行首和第 j 列首置为 0
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    // 从第二行和第二列开始处理
    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // 单独处理第一行
    for (let j = 1; j < col; j++) {
        if (matrix[0][0] === 0) {
            matrix[0][j] = 0;
        }
    }

    // 单独处理第一列
    if (firstColZero) {
        for (let i = 0; i < row; i++) {
            matrix[i][0] = 0;
        }
    }
}

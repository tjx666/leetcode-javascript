/**
 * https://leetcode-cn.com/problems/score-after-flipping-matrix/
 * @param {number[][]} A
 * @return {number}
 */
function matrixScore(A) {
    const rowCount = A.length;
    if (rowCount === 0) return 0;

    const columnCount = A[0].length;
    if (columnCount === 0) return 0;

    // 让第一列的 1 尽可能多
    for (let i = 0; i < rowCount; i++) {
        if (A[i][0] === 0) {
            for (let j = 0; j < columnCount; j++) {
                A[i][j] = A[i][j] === 0 ? 1 : 0;
            }
        }
    }

    // 除了除了第一列的时候可以反转行以外，都不可以反转行
    for (let j = 1; j < columnCount; j++) {
        let zeroCount = 0;
        for (let i = 0; i < rowCount; i++) {
            if (A[i][j] === 0) zeroCount++;
        }

        // 如果当前列的 0 比 1 多，反转当前列
        if (zeroCount > Math.floor(rowCount / 2)) {
            for (let i = 0; i < rowCount; i++) {
                A[i][j] = A[i][j] === 0 ? 1 : 0;
            }
        }
    }

    return A.reduce((sum, row) => sum + parseInt(row.join(''), 2), 0);
}

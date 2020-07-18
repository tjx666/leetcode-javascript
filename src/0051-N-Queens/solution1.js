/**
 * 题述：n 皇后
 * 思路：回溯
 * 时间复杂度：因为会剪枝所以低于 n!
 * 空间复杂度：不算解空间就是 n²
 * @param {number} n
 * @return {string[][]}
 */
function solveNQueens(n) {
    // 状态空间或者是选择路径
    const table = new Array(n);
    for (let i = 0; i < n; i++) {
        table[i] = new Array(n).fill('.');
    }

    function isSafe(row, col) {
        // 判断同一列
        for (let i = 0; i < row; i++) {
            if (table[i][col] === 'Q') return false;
        }

        // 左上角
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (table[i][j] === 'Q') return false;
        }

        // 右上角
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (table[i][j] === 'Q') return false;
        }

        return true;
    }

    const result = [];
    function backTrace(row) {
        // 出口
        if (row === n) {
            result.push(table.map((item) => item.join('')));
            return;
        }
        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                // 做选择
                table[row][col] = 'Q';
                // 递归
                backTrace(row + 1);
                // 回溯
                table[row][col] = '.';
            }
        }
    }
    backTrace(0);
    return result;
}
